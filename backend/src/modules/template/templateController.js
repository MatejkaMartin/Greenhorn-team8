import db from '../../models/';
import fs from 'fs-extra';

export const addTemplateController = async (req, res, next) => {
  const { body } = req;

    let currentTemplate = body;
    const people = await db.sequelize.query(
                " INSERT INTO task_template (template_name,task_name,task_instructions,future_days) "+
                " VALUES ( :template_name,:task_name,:task_instructions,:future_days );",
                {
                  replacements: {
                                  template_name: currentTemplate.templateTitle,
                                  task_name: currentTemplate.taskTitle,
                                  task_instructions: currentTemplate.taskInstructions,
                                  future_days: currentTemplate.futureDay,
                                }
                })
          .spread((results) => {
            if (currentTemplate.files.length) {
            for(var j = 0; j < currentTemplate.files.length; j++) {
              db.sequelize.query(" INSERT INTO document_template_rel (template_id,document_id) VALUES ( :template_id,:document_id );",
                          {
                            replacements: {
                                            template_id: results,
                                            document_id: currentTemplate.files[j]
                                          }
                          })
            }
          } else {
            db.sequelize.query(" INSERT INTO document_template_rel (template_id,document_id) VALUES ( :template_id,:document_id );",
                        {
                          replacements: {
                                          template_id: results,
                                          document_id: currentTemplate.files
                                        }
                        })
          }
          }
           )
           .catch((error) => { console.log(error)})

  return res.json({
    message: 'OK',
  });
}


export const templateFileUploadController = async (req, res, next) => {
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
    " VALUES ( :name, :file_type,:url);", { replacements: { name: currentFile.name, file_type: currentFile.mimetype, url: '/' + timeStamp + '/' + currentFile.name }})
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

export const templateGetController = async (req, res, next) => {
  const templates = await db.sequelize.query(
              `SELECT
               t.id as id,
template_name as templateName,
task_name as taskName,
task_instructions as taskInstructions,
future_days,
case
  when MAX(d.id) is not null
  then  CONCAT('[',GROUP_CONCAT(JSON_OBJECT('id',d.id,'name',d.name,'url', d.url)),']')
  else '[]'
end as files
FROM task_template t
left join document_template_rel dtr on dtr.template_id=t.id
left JOIN document d ON dtr.document_id=d.id
group by t.id`, {type: db.sequelize.QueryTypes.SELECT}).then((templates) => {
  return res.json({
    templates
  })
})
}


export const getAssignedTemplatesController = async (req, res, next) => {

  const assignedTemplates = await db.sequelize.query(
              `SELECT
jp.name,
jp.id as job_position_id,
case
  when MAX(tt.id) is not null
then CONCAT('[',GROUP_CONCAT(JSON_OBJECT('template_id',tt.id,'template_name',tt.template_name)),']')
else '[]'
end as templates
FROM job_position_template_rel jptr
RIGHT JOIN job_position jp on jp.id=jptr.job_position_id
LEFT JOIN task_template tt on tt.id=jptr.template_id
group by jp.name
`, {type: db.sequelize.QueryTypes.SELECT}).then((assignedTemplates) => {
  return res.json({
    assignedTemplates
  })
})

}

export const unassignTemplateController = async (req, res, next) => {
    const { query } = req;
    let job_position_id = query.job_position_id
    let template_id = query.template_id

    const assignedTemplates = await db.sequelize
            .query(`DELETE FROM job_position_template_rel WHERE job_position_id=:job_position_id AND template_id=:template_id`, {type: db.sequelize.QueryTypes.DELETE, replacements: { template_id:template_id, job_position_id:job_position_id}})
    return res.json({
      message: 'OK'
    })
}

export const assignTemplateController = async (req,res,next) => {
  const { body } = req;
  let job_position_id = body.job_position_id
  let template_ids = body.templatesIds
  for (var i = 0; i < template_ids.length; i++) {
  let template_id = template_ids[i]
  const assignedTemplates = await db.sequelize
          .query(`INSERT INTO job_position_template_rel (job_position_id,template_id) VALUES (:job_position_id,:template_id)`, {type: db.sequelize.QueryTypes.INSERT, replacements: { template_id:template_id, job_position_id:job_position_id}})
  }

  return res.json({
    message: 'OK'
  })
}
