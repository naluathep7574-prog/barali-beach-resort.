module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("booking", {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      roomId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      checkInDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      checkOutDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "pending" // สามารถเปลี่ยนเป็น "confirmed", "cancelled" ได้
      }
    });
  
    return Booking;
  };
  