module.exports = function (sequelize, DataTypes) {
  const UserCard = sequelize.define("UserCard", {
    card_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    card_img: DataTypes.STRING,
  });

  return UserCard;
};
