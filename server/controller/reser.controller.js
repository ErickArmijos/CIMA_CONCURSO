<<<<<<< HEAD
=======
import Reservas from "../models/reservas.models.js"
import Laboratorios from "../models/laboratorios.models.js"
import { where } from "sequelize";

export const registerReser = async(req,res) =>{

  try{
      const {categoria,id_usuario,id_laboratorio}= req.body;
      const labreservado = await Laboratorios.findOne({where:{id:id_laboratorio}});
      if(labreservado.reservado == true)   return res.status(400).json({message:["El laboratorio ya se encuentra reservado"]}) 
      const nuevoLab = await Reservas.create({categoria,id_usuario,id_laboratorio,reservado:true});
      return res.status(201).json({nuevoLab})
  }catch(e){
      console.log("error: ",e)
      return res.status(500).json({error:"Laboratorio no creado"})
  }   
} 

export const getReservas = async (req, res) => {
    try {
      const {id_usuario} = req.body;
      const reser = await Reservas.findAll({where:id_usuario});
      return res.status(200).json(reser);
    } catch (e) {
      console.log("error: ", e);
      return res.status(500).json({ error: "Error al obtener las reservas" });
    }
  };

>>>>>>> c64a21fa038a4f3f468a482e945a3dd7b012c7f8
