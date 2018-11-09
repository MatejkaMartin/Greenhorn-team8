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
    return next();
});
};
