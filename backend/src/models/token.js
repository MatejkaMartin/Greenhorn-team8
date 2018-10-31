

module.exports = (sequelize, DataTypes) => {
  const tokens = sequelize.define(
    'tokens',
    {
      user_id: DataTypes.INTEGER,
      token: DataTypes.STRING,
      expiresAt: DataTypes.DATE,
    },
    {}
  );
  return tokens;
};
