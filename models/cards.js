module.exports = function (sequelize, DataTypes) {
  const Card = sequelize.define("Card", {
    card_code: DataTypes.STRING,
    card_img: DataTypes.STRING,
  });
 
  return Card;
};
