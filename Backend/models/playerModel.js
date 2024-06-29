const Sequelize = require("sequelize");

const sequelize = require("../utils/database");


const PlayerData = sequelize.define("player", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Dob: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    PhotoUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    BirthPlace: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Matches: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    score: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    career: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    fifties: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    centuries: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    wickets: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    average: {
        type: Sequelize.STRING,
        allowNull: false,
    },

})

module.exports = PlayerData;