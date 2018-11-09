import db from '../../models/';
import jwt from 'jsonwebtoken';

export const peopleController = async (req, res, next) => {

  const people = await db.sequelize.query("SELECT u.id as id,"+
   "u.name as name, "+
   "u.email as email, "+
   "u.mobile as mobile, "+
   "u.avatarUrl as avatar, "+
   "r.name as role, "+
   "d.name as department, "+
   "j.name as jobPosition "+
   " FROM users u "+
   " left join roles r on u.roleID=r.id "+
   " left join departments d on u.departmentID=d.id "+
   " left join job_positions j on u.jobPositionID=j.id; ", { type: db.sequelize.QueryTypes.SELECT}).then(people => { return people }).catch(() => { return '{}' });

return res.json({
  people
});
};

export const peopleAddController = async (req, res, next) => {
  const { body } = req;
  const people = await db.sequelize.query("INSERT INTO users (name,email,mobile,avatarURL,roleID,departmentID,jobPositionID) "+
  " VALUES ( :name, "+
          " :email, "+
          " :mobile, "+
          " :avatarURL, "+
          " (SELECT id "+
            " FROM roles " +
          " WHERE name=:role), "+
          " (SELECT id "+
            " FROM departments "+
          " WHERE name=:department), "+
          " (SELECT IF ( EXISTS ( SELECT id "+
            " FROM job_positions " +
          " WHERE name=:jobPosition),(SELECT id "+
            " FROM job_positions " +
          " WHERE name=:jobPosition ) , null )) "+
          ");", { type: db.sequelize.QueryTypes.SELECT, replacements: { name: body.firstName + ' ' + body.lastName,email: body.email,mobile: body.phone,avatarURL: body.avatarURL,role: body.role,department: body.department,jobPosition: body.jobPosition }}).then().catch(error => { console.log(error) });

return res.json({
  ok: true,
});
};


export const peopleDeleteController = async (req, res, next) => {
  const { params } = req;
  const people = await db.sequelize.query("DELETE FROM users where id=:id;", { type: db.sequelize.QueryTypes.SELECT, replacements: { id: params.id}}).then().catch(error => { console.log(error) });

return res.json({
  ok: true,
});
};
