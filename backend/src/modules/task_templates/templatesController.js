import db from '../../models/';

export const templatesController = async (req, res, next) => {

  // Fetch all templates request from db
  const templates = await db.Task_Template
    .findAll({ attributes: ['id','name','instructions']})
    .then(templates => { return templates })
    .catch(() => { return '{}' });

  // Fetch all rolles request from db
  const roles = await db.Role
    .findAll({ attributes: ['id','name']})
    .then(roles => { return roles })
    .catch(() => { return '{}' });

  // Fetch all job positions from db
  const jobPositions = await db.Job_Position
    .findAll({ attributes: ['id','name']})
    .then(jobPositions => { return jobPositions })
    .catch(() => { return '{}' });

  console.log("Feched templates from backend:" + templates)
  return res.json({
    templates: templates
  });
};
