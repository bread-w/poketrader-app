const user = require("./user");

module.exports = function (sequelize, DataTypes) {
    const userCard = sequelize.define("userCard", {
      
    });
  
    userCard.associate = function (models) {
      userCard.belongsTo(models.User,  {
        foreignKey: {
          allowNull: false,
        },
      });
    };
    return userCard;
  };