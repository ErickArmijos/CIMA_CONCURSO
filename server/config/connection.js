import {Sequelize} from "sequelize";
import "dotenv/config"

const database = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;
const username = process.env.DB_USERNAME;
const portDB = process.env.DB_PORT;

const sequelize = new Sequelize(database,username,password,{
    dialect: "postgres",
    host: process.env.DB_SERVER,
    port: portDB,
})


export default sequelize;