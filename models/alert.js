module.exports = function (sequelize, DataTypes) {
  const Card = sequelize.define("Card", {
    set_code: DataTypes.STRING,
    card_code: DataTypes.STRING,
  });

  Card.associate = function (models) {
    Card.hasMany(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Card;
};
