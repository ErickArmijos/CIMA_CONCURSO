import Laboratorios from "../models/laboratorios.models.js"

export const registerLab = async(req,res) =>{

    try{
        const {codigolab,nombre,capacidad,disponibilidad,horario,equipos}= req.body;
        const labexiste = await Laboratorios.findOne({where:{codigolab}});
        if(labexiste){
            return res.status(400).json({message:["El laboratorio ya se encuentra registrado"]})
        }

        const nuevoLab = await Laboratorios.create({codigolab,nombre,capacidad,disponibilidad,horario,equipos});
        return res.status(201).json({nuevoLab})

    }catch(e){
        console.log("error: ",e)
        return res.status(500).json({error:"Laboratorio no creado"})
    }   

}

export const getLabs = async (req, res) => {
    try {
      const labs = await Laboratorios.findAll();
      return res.status(200).json(labs);
    } catch (e) {
      console.log("error: ", e);
      return res.status(500).json({ error: "Error al obtener los laboratorios" });
    }
  };

