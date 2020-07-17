module.exports = function (sequelize, DataTypes) {
  const Card = sequelize.define("Card", {
    set_code: DataTypes.STRING,
    card_code: DataTypes.STRING,
  });

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
