require("dotenv/config");

module.exports = {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT || 5432, 
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    DIALECT: process.env.DB_DIALECT || "postgres",
    pool: {
        max: parseInt(process.env.DB_POOL_MAX),      // ตรวจสอบว่าเป็นตัวเลข
        min: parseInt(process.env.DB_POOL_MIN),      // ตรวจสอบว่าเป็นตัวเลข
        acquire: parseInt(process.env.DB_POOL_ACQUIRE), // ตรวจสอบว่าเป็นตัวเลข
        idle: parseInt(process.env.DB_POOL_IDLE)     // ตรวจสอบว่าเป็นตัวเลข
    }
};
