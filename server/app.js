import express from "express";
import "dotenv/config"
import routerIndex from "./routes/index.routes.js";
import sequelize from "./config/connection.js";
import cookieParser from 'cookie-parser'
import cors from "cors"

const app = express()
const serverPort = process.env.SERVER_PORT;
app.listen(serverPort,()=>{
    console.log("Server running in the port # ",serverPort)
})

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:3000",credentials:true}));




sequelize
  .authenticate()
  .then(() => {
    console.log('Connection success');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Sync models');
  })
  .catch((error) => {
    console.error('Connection fail', error);
  });

app.use("/",routerIndex);


console.log("Error:", )