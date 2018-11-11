import db from '../../models/';
import jwt from 'jsonwebtoken';
import sgMail  from '@sendgrid/mail';
import cryptoRandomString from 'crypto-random-string';

export const peopleController = async (req, res, next) => {

  const people = await db.sequelize.query(
  "SELECT u.id as id," +
   "u.name as name, " +
   "u.email as email, " +
   "u.mobile as mobile, " +
   "u.avatarUrl as avatar, " +
   "r.name as role, " +
   "d.name as department, " +
   "j.name as jobPosition " +
   " FROM Users u " +
   " left join Roles r on u.roleID=r.id " +
   " left join Departments d on u.departmentID=d.id " +
   " left join Job_Positions j on u.jobPositionID=j.id; ", { type: db.sequelize.QueryTypes.SELECT})
   .then(people => { return people })
   .catch(() => {
       res.status(404);
       res.json({
       message: "No catalogs for job position"
     })
   });

   return res.json({
     people
   });
};

export const peopleAddController = async (req, res, next) => {
  const { body } = req;
  const people = await db.sequelize.query("INSERT INTO Users (name,email,mobile,avatarURL,roleID,departmentID,jobPositionID) "+
  " VALUES ( :name, "+
          " :email, "+
          " :mobile, "+
          " :avatarURL, "+
          " (SELECT id "+
            " FROM Roles " +
          " WHERE name=:role), "+
          " (SELECT id "+
            " FROM Departments "+
          " WHERE name=:department), "+
          " (SELECT IF ( EXISTS ( SELECT id "+
            " FROM Job_Positions " +
          " WHERE name=:jobPosition),(SELECT id "+
            " FROM Job_Positions " +
          " WHERE name=:jobPosition ) , null )) "+
          ");", { type: db.sequelize.QueryTypes.INSERT, replacements: { name: body.firstName + ' ' + body.lastName,email: body.email,mobile: body.phone,avatarURL: body.avatarURL,role: body.role,department: body.department,jobPosition: body.jobPosition }})
          .then()
          .catch();
const linkString = cryptoRandomString(15);
const token = await db.sequelize.query("INSERT INTO reset_password (token,active,user_id) VALUES (:token,:active,(SELECT id FROM Users WHERE email=:email AND name=:name));", { type: db.sequelize.QueryTypes.INSERT, replacements: { token: linkString,active: true,email: body.email,name: body.firstName + ' ' + body.lastName}})
.then(

)
.catch(() => {
    res.status(404);
    res.json({
    message: "Imposibru to create token"
  })
});


const html = 'Hello <strong>' + body.firstName + '</strong>,' +
             '<br/>' +
             '<br/>' +
             'I am sending you this link <a href="http://localhost:3000/setpassword/'+linkString+'">Set password<a>' +
             '<br/>' +
             '<br/>' +
             'Best regards,' +
             '<br/>' +
             '<br/>' +
             'Greenhorn Team';
sgMail.setApiKey('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');
const msg = {
    to: body.email,
    from: 'test@greenhorn.com',
    subject: 'Account link',
    html: html
};
sgMail.send(msg)

return res.json({
  ok: true,
});
};


export const peopleDeleteController = async (req, res, next) => {
  const { params } = req;
  const people = await db.sequelize.query("DELETE FROM Users where id=:id;", { type: db.sequelize.QueryTypes.DELETE, replacements: { id: params.id}})
  .then(() => {
    return res.json({
      ok: true,
    });
  })
};
