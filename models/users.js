module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  });
  // update to ES6 
  User.associate = function (models) {
    User.belongsToMany(models.Card, {
     through: "user_cards",
     as: "cards",
     foreignKey: "user_id",
    });
  };

  return User;
};
