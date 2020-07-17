module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  });

  User.associate = function (models) {
    User.hasMany(models.Card, {
      onDelete: "cascade",
    });
  };

  return User;
};
