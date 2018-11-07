import db from '../../models/';
import jwt from 'jsonwebtoken';

export const catalogController = async (req, res, next) => {

  const departments = await db.Department.findAll({ attributes: ['id','name']}).then(departments => { return departments }).catch(() => { return '{}' });
  const roles = await db.Role.findAll({ attributes: ['id','name']}).then(roles => { return roles }).catch(() => { return '{}' });
  const jobPositions = await db.Job_Position.findAll({ attributes: ['id','name']}).then(jobPositions => { return jobPositions }).catch(() => { return '{}' });

return res.json({
  departments: departments,
  roles: roles,
  jobPositions: jobPositions,

});
};
