import db from '../../models/';
import sgMail  from '@sendgrid/mail';
import cryptoRandomString from 'crypto-random-string';

export const getUsersController = async (req, res, next) => {

  let where_clause = ''
  const { query } = req;
  if (query.role) {
    where_clause = where_clause.concat(' AND r.name = LOWER("' + query.role + '")')
  }

  const users = await db.sequelize.query(
    "SELECT u.id as id,"+
    "u.name as name, "+
    "u.email as email, "+
    "u.mobile as mobile, "+
    "u.avatarUrl as avatar, "+
    "r.name as role, "+
    "d.name as department, "+
    "j.name as jobPosition "+
    " FROM user u "+
    " left join role r on u.role_id=r.id "+
    " left join department d on u.department_id=d.id "+
    " left join job_position j on u.jobPosition_id=j.id WHERE u.deleted = false" + where_clause,
    { type: db.sequelize.QueryTypes.SELECT})
    .then(users => {
      return res.json({
        users
      });
    })
    .catch((error) => {
      res.status(500),
      res.json({
        message: "error obtaining list of users"
      })
    });

}


export const addUserController = async (req, res, next) => {
  const { body } = req;

  await db.sequelize.query( "SELECT count(*) as numberOfUsers FROM user where email=:email",
  {
    type: db.sequelize.QueryTypes.SELECT,
    replacements: {
    email: body.email
  }
  })
  .then((result) => {
  if( result[0].numberOfUsers > 0) {
   return   res.status(500),
            res.json({
              message: "User with email " + body.email + " already exists"
            })
  }
  })
  .catch()

  await db.sequelize.query( "INSERT INTO user (name, email, mobile, avatarURL, role_id, department_id, jobPosition_id) VALUES (:name, :email, :mobile, :avatarURL, :role_id, :department_id, :jobPosition_id)",
  {
    type: db.sequelize.QueryTypes.INSERT,
    replacements: {
    name: body.firstName + ' ' + body.lastName,
    email: body.email,
    mobile: body.mobile,
    avatarURL: body.avatarURL,
    role_id: body.role_id,
    department_id: body.department_id,
    jobPosition_id: body.jobPosition_id
  }
  }).spread((results,metadata) => {
    if (metadata !== '1') {
        sendEmail(body.email,body.firstName + ' ' + body.lastName,res)
        res.status(200)
        res.json({
          message: 'SUCCESS'
        })
    } else {
        res.status(500)
        res.json({
          message: 'error creating user'
        })
    }
  })

}


const sendEmail = async (email,name) => {

  const linkString = cryptoRandomString(15);
  const token = await db.sequelize.query("INSERT INTO reset_password (token,active,user_id) VALUES (:token,:active,(SELECT id FROM user WHERE email=:email AND name=:name));",
   {
     type: db.sequelize.QueryTypes.INSERT,
     replacements: {
       token: linkString,
       active: true,
       email: email,
       name: name
     }
   })
   .catch((error) => {
     return res.status(404);
    res.json({
      message: "Imposibru to create token"
    })
    });

  const html = 'Hello <strong>' + name + '</strong>,' +
                       '<br/>' +
                       '<br/>' +
                       'I am sending you this link <a href="http://dev.frontend.team08.vse.handson.pro/setpassword/'+linkString+'">Set password<a>' +
                       '<br/>' +
                       '<br/>' +
                       'Best regards,' +
                       '<br/>' +
                       '<br/>' +
                       'Greenhorn Team';
  sgMail.setApiKey('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');
  const msg = {
              to: email,
              from: 'test@greenhorn.com',
              subject: 'Account link',
              html: html
  };
  sgMail.send(msg)

}


export const deleteUserController = async (req, res, next) => {
  const { params } = req;
  await db.sequelize.query("UPDATE user SET deleted=true where id=:id", { type: db.sequelize.QueryTypes.UPDATE, replacements: { id: params.id }})
  .spread((results,metadata) => {
    if (metadata === 1 ) {
      res.status(200)
      res.json({
                 message: 'user deleted'
               })
    } else {
      res.status(500)
      res.json({
                 message: 'error deleting user'
               })
    }
  })

};
