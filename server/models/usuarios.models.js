import sequelize from "../config/connection.js";
import { DataTypes } from "sequelize";
import reserva from "./reservas.models.js";

const usuarios = sequelize.define("usuarios",{
    "uuid":{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
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
    },
    "rol":{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    timestamps: false
});

usuarios.hasMany(reserva,{
    foreignKey:'id_usuario',
    sourceKey:'uuid'
});
usuarios.belongsTo(reserva,{
    foreignKey:'uuid',
    sourceKey:'id_usuario'
});
 
  

export default usuarios;