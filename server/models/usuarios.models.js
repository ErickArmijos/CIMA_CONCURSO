import sequelize from "../config/connection.js";
import { DataTypes } from "sequelize";

const Usuarios = sequelize.define("usuarios",{
    "uuid":{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
    },
    "nombres":{
        type:DataTypes.STRING,
        allowNull:false,
    },
    "apellidos":{
        type:DataTypes.STRING,
        allowNull:false,
    },
    "email":{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    },
    "contraseña":{
        type:DataTypes.STRING,
        allowNull:false
    },
    "telefono":{
        type:DataTypes.STRING,
        allowNull:false
    },
    "fecha_nacimiento":{
        type:DataTypes.DATEONLY,
        allowNull:false
    }
},{
    timestamps: false
})


export default Usuarios;