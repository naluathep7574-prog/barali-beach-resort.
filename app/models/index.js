const config = require("../config/db.config");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.DIALECT,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire, 
            idle: config.pool.idle
        }
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model")(sequelize, Sequelize);
db.role = require("../models/role.model")(sequelize, Sequelize);
db.booking = require("../models/booking.model")(sequelize, Sequelize);
db.room = require("../models/room.model")(sequelize, Sequelize);

// ตั้งความสัมพันธ์ระหว่างตาราง
db.role.belongsToMany(db.user, {
    through: "user_roles"
});
db.user.belongsToMany(db.role, {
    through: "user_roles"
});

db.booking.belongsTo(db.user);
db.booking.belongsTo(db.room);
db.room.hasMany(db.booking);


module.exports = db;
