import db from '../../models/';

export const catalogController = async (req, res, next) => {

  const departments =   await db.sequelize.query('SELECT id, name FROM department', { type: db.sequelize.QueryTypes.SELECT})
  const roles = await db.sequelize.query('SELECT id, name FROM role', { type: db.sequelize.QueryTypes.SELECT})
  const jobPositions = await db.sequelize.query('SELECT id, name FROM job_position', { type: db.sequelize.QueryTypes.SELECT})

  return  res.json({
            departments: departments,
            roles: roles,
            jobPositions: jobPositions,

          });
};
