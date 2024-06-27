import Laboratorios from "../models/laboratorios.models.js"

export const registerLab = async(req,res) =>{

    try{
        const {codigolab,nombre,capacidad,horario,equipos}= req.body;
        const labexiste = await Laboratorios.findOne({where:{codigolab}});
        if(labexiste){
            return res.status(400).json({message:["El laboratorio ya se encuentra registrado"]})
        }

        const nuevoLab = await Laboratorios.create({codigolab,nombre,capacidad,horario,equipos});
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


export const updateLab = async (req, res) => {
  try {
      const { id } = req.params;
      const { codigolab, nombre, capacidad, equipos } = req.body;

      
      const lab = await Laboratorios.findByPk(id);
      if (!lab) {
          return res.status(404).json({ message: "Laboratorio no encontrado" });
      }

      // Actualizar el laboratorio
      lab.codigolab = codigolab || lab.codigolab;
      lab.nombre = nombre || lab.nombre;
      lab.capacidad = capacidad || lab.capacidad;
      lab.equipos = equipos || lab.equipos;

      await lab.save();

      return res.status(200).json({ message: "Laboratorio actualizado correctamente", lab });

  } catch (e) {
      console.error("Error: ", e);
      return res.status(500).json({ error: "Error al actualizar el laboratorio" });
  }
};



