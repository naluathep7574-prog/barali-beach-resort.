module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
      roomType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      roomNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      }
    });
  
    return Room;
  };
  