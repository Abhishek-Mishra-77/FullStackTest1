const Sequelize = require("sequelize");

const sequelize = new Sequelize("test1", "root", "root", {
    dialect: "mysql",
    host: "localhost",
    logging: false,
    timezone: "+05:30",
})


module.exports = sequelize