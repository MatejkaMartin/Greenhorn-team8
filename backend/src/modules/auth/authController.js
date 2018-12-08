import db from '../../models/';
import jwt from 'jsonwebtoken';

export const authController = async (req, res, next) => {
  const { body } = req;
  if ( !body.email || !body.password ) {
    return  res.status(400),
            res.json({
              message: "email or password is empty"
            })
  }

  await db.sequelize.query(
    "SELECT  u.id, " +
    "		     u.name, " +
    "        u.email, " +
    "        r.name AS role, " +
    "        d.name AS department, " +
    "        jp.name AS job_position " +
    "FROM `user` u " +
    "left JOIN `job_position` jp on u.jobPosition_id=jp.id " +
    "left JOIN `department` d on u.department_id=d.id " +
    "left JOIN `role` r on u.role_id=r.id " +
    "WHERE email=:email " +
    "AND password=:password " +
    "LIMIT 1;",
    {
    type: db.sequelize.QueryTypes.SELECT,
    replacements: {
      email: body.email,
      password: body.password
    }
  })
  .then(user => {
    if(user.length === 0) {
      return  res.status(500),
              res.json({
                message: "Login failed"
              })
    }

    let token = getToken(user);

    deactivateExistingTokenForUser(user);
    saveTokenForUser(user, token).then((result) => {
      if (result.message === 'FAILED') {
        return  res.status(500),
                res.json({
                  message: "Error creating user token"
                })
      } else if (result.message === 'SUCCESS' ) {
        return  res.json({
                  user: user[0],
                  token
        });
      }
    });
  })
}

const getToken = (user) => {
  return jwt.sign(JSON.parse(JSON.stringify(user))[0], 'shhhhh', {expiresIn: 60 * 60 * 24});
}


const deactivateExistingTokenForUser = async (user) => {
  await db.sequelize.query("UPDATE `token` SET active=0 WHERE user_id=:user_id; ", { type: db.sequelize.QueryTypes.UPDATE, replacements: { user_id: user[0].id }})
}


const saveTokenForUser = async (user, token) => {
  let expirationDate = new Date(0)
  expirationDate.setUTCSeconds(jwt.decode(token).exp)
  let result = '';

  await db.sequelize.query("INSERT INTO `token` (user_id, token, expiresAt, active ) VALUES (:user_id,:token,:expiresAt,:active); ", { type: db.sequelize.QueryTypes.INSERT, replacements: { active: true, user_id: user[0].id, expiresAt: expirationDate, token: token }})
  .spread((results,metadata) => {
    if(metadata === 1 ) {
      result = { message: 'SUCCESS'};
    } else {
      result =  { message: 'FAILED' };
    }
  })
  .catch((error) => { console.log(error)})
  return result
}


export const setPasswordController = async (req, res, next) => {
  const { body } = req;
  await db.sequelize.query("UPDATE user SET password=:password WHERE id=(SELECT user_id FROM reset_password WHERE token=:token and active=true);",
  {
    type: db.sequelize.QueryTypes.UPDATE,
    replacements: {
      token: body.token,
      password: body.password
    }
  })
  .spread((results, metadata) => {
    if(metadata===0) {
        res.status(404);
        res.json({
        message: "No token found"
      })
    } else {
      db.sequelize.query("UPDATE reset_password SET active=false WHERE token=:token and active=true;",
      { type: db.sequelize.QueryTypes.UPDATE,
        replacements: {
          token: body.token
        }
      })
      res.json({
      message: "Password updated"
      })
      }
  })
 };

  const user = await db.User.findAll({
  attributes: ['id','email','name','roleID'],
  where: {
    email: body.email,
    password: body.password,
  },
  rejectOnEmpty: true
}).then(user => {
  const userJson = JSON.parse(JSON.stringify(user))[0]

  const token = jwt.sign(userJson, 'shhhhh', {expiresIn: 60 * 60 * 24});

  db.Token.create({ user_id: userJson.id, token: token, expiresAt: jwt.decode(token,).exp}, { fields: [ 'user_id','token','expiresAt' ] })
  return res.json({
    user: userJson,
    token: token
  });
})
  .catch((error) => {
    console.log(error);
    return next();
});
};

