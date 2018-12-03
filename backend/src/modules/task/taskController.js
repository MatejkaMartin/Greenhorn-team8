import db from '../../models/';
import fs from 'fs-extra'


export const taskAddController = async (req, res, next) => {
  const { body } = req;
  for(var i = 0; i < body.length; i++) {

    let currentTask = body[i];
    const people = await db.sequelize.query(
                " INSERT INTO task (deadline,state_id,assignee_id,owner_id,task_name,task_instructions) "+
                " VALUES ( :deadline, 1, :assignee, :owner_id, :task_name, :task_instructions );",
                {
                  replacements: {
                                  deadline: currentTask.deadline,
                                  assignee: currentTask.employee_id,
                                  task_name: currentTask.taskTitle,
                                  task_instructions: currentTask.taskDescription,
                                  owner_id: currentTask.owner_id
                                }
                })
          .spread((results) => {
            if (currentTask.files.length) {
            for(var j = 0; j < currentTask.files.length; j++) {
              db.sequelize.query(" INSERT INTO document_task_rel (task_id,document_id) VALUES ( :task_id,:document_id );",
                          {
                            replacements: {
                                            task_id: results,
                                            document_id: currentTask.files[j]
                                          }
                          })
            }
          } else {
            db.sequelize.query(" INSERT INTO document_task_rel (task_id,document_id) VALUES ( :task_id,:document_id );",
                        {
                          replacements: {
                                          task_id: results,
                                          document_id: currentTask.files
                                        }
                        })
          }
          }
           )
  }
  return res.json({
    message: 'OK',
  });
}


export const taskGetController = async (req, res, next) => {
  const tasks = await db.sequelize.query(
              `SELECT
              t.id as id,
t.task_name as taskName,
t.task_instructions as taskDetail,
t.deadline,
s.name as state,
case
  when MAX(d.id) is not null
  then  CONCAT('[',GROUP_CONCAT(JSON_OBJECT('id',d.id,'name',d.name,'url', d.url)),']')
  else '[]'
end as files,
ua.name as assignee,
uo.name as owner
FROM task t
left join document_task_rel dtr on dtr.task_id=t.id
left JOIN document d ON dtr.document_id=d.id
inner join state s on t.state_id=s.id
inner join user ua on ua.id=t.assignee_id
inner join user uo on uo.id=t.owner_id
group by t.id`, {type: db.sequelize.QueryTypes.SELECT}).then((tasks) => {
  return res.json({
    tasks
  })
})
}

export const taskFileUploadController = async (req, res, next) => {
  if (req.files.file.length) {
  let files = req.files.file
  var timeStamp = Math.floor(Date.now());
  if (!fs.existsSync(`public/`+ timeStamp)){
    fs.mkdirSync(`public/`+ timeStamp);
  }
  const IDs = [];
  for(var j = 0; j < files.length; j++) {
  let currentFile = files[j]
  currentFile.mv(`public/`+ timeStamp +`/${currentFile.name}`)
  await db.sequelize.query(
    " INSERT INTO document (name, file_type, url) "+
    " VALUES ( :name, :file_type,:url);",
    { replacements: {
      name: currentFile.name,
      file_type: currentFile.mimetype,
      url: '/' + timeStamp + '/' + currentFile.name }})
    .spread((results) => {
      IDs.push(results)
    })
  }
  return res.json({
    createdID : IDs
  })
} else {
  let file = req.files.file
  let id = ''
  var timeStamp = Math.floor(Date.now());
  if (!fs.existsSync(`public/`+ timeStamp)){
    fs.mkdirSync(`public/`+ timeStamp);
  }
  file.mv(`public/`+ timeStamp +`/${file.name}`)
  await db.sequelize.query(
    " INSERT INTO document (name, file_type, url) "+
    " VALUES ( :name, :file_type,:url);", { replacements: { name: file.name, file_type: file.mimetype, url: '/' + timeStamp + '/' + file.name }})
    .spread((results) => {
      id = results
    })

  return res.json({
    createdID : id
  })
}
}

export const updateTaskController = async (req, res, next) => {
  const { params, body } = req;
  await db.sequelize.query(" UPDATE task SET state_id=(SELECT id FROM state where name=:new_status) where id=:task_id;", { replacements: { new_status: body.newState, task_id: params.id }})
  return res.json({
    message: 'OK'
  })

}
