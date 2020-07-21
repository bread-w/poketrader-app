module.exports = function (sequelize, DataTypes) {
  const UserCard = sequelize.define("UserCard", {
    card_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  });
  // update to ES6



  // UserCard.associate = function (models) {
  //   UserCard.belongsTo(models.User);
  // };


  return UserCard;
};
