module.exports = function (sequelize, DataTypes) {
  const Card = sequelize.define("Card", {
    card_code: DataTypes.STRING,
    card_img: DataTypes.STRING,
    // user_id: DataTypes.INTEGER,
  });
  // update to ES6 
  Card.associate = function (models) {
    Card.belongsToMany(models.User, {
      through: "user_cards",
      as: "users",
      foreignKey: "card_id",
      },
    );
  };
  return Card;
};
