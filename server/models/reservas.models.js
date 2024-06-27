import sequelize from "../config/connection.js";
import { DataTypes } from "sequelize";


 const reserva = sequelize.define("reserva",{
    "id":{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true
    }, 
    "categoria":{
        type:DataTypes.STRING,
        allowNull:false,
    },
    "id_usuario":{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    "id_laboratorio":{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
},{
    timestamps: false
});

export default reserva;