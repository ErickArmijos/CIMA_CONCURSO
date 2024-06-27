import sequelize from "../config/connection.js";
import { DataTypes } from "sequelize";
import reserva from "./reservas.models.js";

const laboratorio = sequelize.define("laboratorio",{
    "id":{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
   },
   "codigolab":{
        type:DataTypes.STRING,
        allowNull:false
   },
   "nombre":{
        type:DataTypes.STRING,
        allowNull:false,
   },
   "capacidad":{
        type:DataTypes.INTEGER,
        allowNull:false,
   },
   "equipos":{
        type:DataTypes.INTEGER,
        allowNull:false,
  },
  "reservado":{
    type:DataTypes.BOOLEAN,
    defaultValue:false,
  },
  "horario":{
    type:DataTypes.INTEGER,
    allowNull:false,
  }
},{
    timestamps: false
});
laboratorio.hasMany(reserva,{
    foreignKey:'id_laboratorio',
    sourceKey:'id',
})
laboratorio.belongsTo(reserva,{
    foreignKey:'id',
    sourceKey:'id_laboratorio',
})
export default laboratorio;


