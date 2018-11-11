import db from '../../models/';
import jwt from 'jsonwebtoken';

export const authController = async (req, res, next) => {
  const { body } = req;
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
  .catch(() => {
    res.status(404);
    res.json({
    message: "Login failed"
  })
});
};


export const setPasswordController = async (req, res, next) => {
  const { body } = req;
  await db.sequelize.query("UPDATE users SET password=:password WHERE id=(SELECT user_id FROM reset_password WHERE token=:token and active=true);", { type: db.sequelize.QueryTypes.UPDATE, replacements: { token: body.token,password: body.password}})
  .spread((results, metadata) => {
    if(metadata===0) {
        res.status(404);
        res.json({
        message: "No token found"
      })
    } else {
      db.sequelize.query("UPDATE reset_password SET active=false WHERE token=:token and active=true;", { type: db.sequelize.QueryTypes.UPDATE, replacements: { token: body.token}})
      .spread((results, metadata) => {
        res.status(404);
        res.json({
        message: "No token found"
      })
    })
      res.json({
      message: "Password updated"
      })
      }
  })

};
