"use strict ";

const { Sequelize, DataTypes } = require("sequelize");
const users = require("./users.model.js");
const deals = require("./deals.model.js");
const claimed = require("./claimed.model.js");

const POSTGRES_URL = process.env.DATABASE_URL  || "postgresql://ali:1312@localhost:5432/ali";

const sequelizeOption = {
    dialectOptions: {
     ssl: {
      require: true,
      rejectUnauthorized: false,
     },
    },
   };
   
const sequelize = new Sequelize(POSTGRES_URL, sequelizeOption );


const usersModel = users(sequelize, DataTypes);
// console.log(usersModel);
const dealsModel = deals(sequelize, DataTypes);
// console.log(dealsModel);
const claimedModel = claimed(sequelize, DataTypes);
// console.log(claimedModel);




module.exports = {
    db: sequelize,
    users: usersModel,
    deals: dealsModel,
    claimed: claimedModel,
};

