import db from '../../models/';

export const templatesController = async (req, res, next) => {

  // Fetch all templates request from db

  const templates = db.task_template
    .findAll({ attributes: ['id' , 'template_name']})
    .then(templates => {
      console.log(templates)
      return templates
     })
    .catch(() => { return '{}' });

    // const templates = db.sequelize.query('SELECT id, template_name, task_instructions FROM task_template', { type: db.sequelize.QueryTypes.SELECT})
    //   .then(templates => { return templates })
    //   .catch(() => { return '{}' });

  // Fetch all rolles request from db
  // const roles = await db.Role
  //   .findAll({ attributes: ['id','name']})
  //   .then(roles => { return roles })
  //   .catch(() => { return '{}' });

  // Fetch all job positions from db
  // const jobPositions = await db.Job_Position
  //   .findAll({ attributes: ['id','name']})
  //   .then(jobPositions => { return jobPositions })
  //   .catch(() => { return '{}' });

  console.log("Feched templates from backend:" + templates)
  return res.json({
    templates: templates
  });
};
