import db from '../../models/';
import jwt from 'jsonwebtoken';

export const catalogController = async (req, res, next) => {

  const departments = await db.Department.findAll({ attributes: ['id','name']})
  .then(departments => { return departments })
  .catch(() => { return next();});
  const roles = await db.Role.findAll({ attributes: ['id','name']})
  .then(roles => { return roles })
  .catch(() => { return next();});
  const jobPositions = await db.Job_position.findAll({ attributes: ['id','name']})
  .then(jobPositions => { return jobPositions })
  .catch(() => { return next();});

return res.json({
  departments: departments,
  roles: roles,
  jobPositions: jobPositions,

});
};
