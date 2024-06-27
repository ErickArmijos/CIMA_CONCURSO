import Usuarios from "../models/usuarios.models.js"
import bcrypt from "bcrypt"
import { tokenGenerator } from "../lib/tokenGenerator.js"
import "dotenv/config.js"

export const login = async (req,res)=>{

    try{
        const { email, contraseña } = req.body;
        const usuarioExiste = await  Usuarios.findOne({ where: { email } });
        if (!usuarioExiste) {
            return res.status(404).json({ message: ["Usuario no encontrado"] });
        }
        const coincideContrasena = await bcrypt.compare(contraseña, usuarioExiste.contraseña);
        if (!coincideContrasena) {
            return res.status(401).json({ message:[ "Contraseña incorrecta"] });
        }

        const token = await tokenGenerator({uuid:usuarioExiste.uuid})
        res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
          });
        return res.status(200).json({ mensaje: "Inicio de sesión exitoso", usuarioExiste });


    }catch(e){
        console.log("error: ", e);
        return res.status(500).json({error: e})
    }
}


export const register = async (req,res)=>{
    try{
        const {nombres,apellidos,email,contraseña,telefono,fecha_nacimiento} = req.body;
        const usuarioExiste = await Usuarios.findOne({ where: { email } });
        if (usuarioExiste) {
            return res.status(400).json({ message: ["El email ya está registrado"] });
        }
        const passHash =await bcrypt.hash(contraseña,15);
        console.log("passss: ",passHash)
        const nuevoUsuario = await Usuarios.create({nombres,apellidos,email,contraseña:passHash,telefono,fecha_nacimiento});
        console.log(nuevoUsuario)
        const token = await tokenGenerator({uuid:nuevoUsuario.uuid})
        res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
          });
        return res.status(201).json({nuevoUsuario})
    }catch(e){
        console.log("error: ",e)
        return res.status(500).json({error:"Usuario no creado"})
    }
}

export const logout = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
      });
    return res.sendStatus(200);
  };


export const profile = async (req,res) =>{
    const userFound = await User.findByPk(req.user.uuid);
    if(userFound){
        res.json(userFound)
    }else{
        res.status(400).json({message:"User not found"})
    }
    
}

export const verifyToken = async (req, res) => {
    const TOKEN_SECRET = process.env.SECRET_KEY
    const { token } = req.cookies;
    if (!token) return res.send(false);
  
    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error) return res.sendStatus(401);
  
      const userFound = await User.findById(user.id);
      if (!userFound) return res.sendStatus(401);
  
      return res.json({
        uuid: userFound.uuid,
        email: userFound.email,
      });
    });
  };