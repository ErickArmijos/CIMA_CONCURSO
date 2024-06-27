import Usuarios from "../models/usuarios.models.js"
import bcrypt from "bcrypt"
import { tokenGenerator } from "../lib/tokenGenerator.js"



export const login = async (req,res)=>{

    try{
        const { email, contraseña } = req.body;
        const usuarioExiste = await  Usuarios.findOne({ where: { email } });
        if (!usuarioExiste) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        const coincideContrasena = await bcrypt.compare(contraseña, usuarioExiste.contraseña);
        if (!coincideContrasena) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        const token = await tokenGenerator({uuid:usuarioExiste.uuid})
        res.cookie("token",token)
        return res.status(200).json({ mensaje: "Inicio de sesión exitoso", usuarioExiste });


    }catch(e){
        console.log("error: ", e);
        return res.status(500).json({error: e})
    }
}


export const register = async (req,res)=>{
    try{
        const {nombres,apellidos,email,contraseña,telefono,fecha_nacimiento} = req.body;
        const passHash =await bcrypt.hash(contraseña,15);
        console.log("passss: ",passHash)
        const nuevoUsuario = await Usuarios.create({nombres,apellidos,email,contraseña:passHash,telefono,fecha_nacimiento});
        console.log(nuevoUsuario)
        const token = await tokenGenerator({uuid:nuevoUsuario.uuid})
        res.cookie("token",token)
        return res.status(201).json({nuevoUsuario})
    }catch(e){
        console.log("error: ",e)
        return res.status(500).json({error:"Usuario no creado"})
    }
}

export const logout = (req,res)=>{
    res.clearCookie("token");

    return res.status(200).json({"mensaje":"sesión cerrada"})
}


export const profile = async (req,res) =>{
    const userFound = await User.findByPk(req.user.uuid);
    if(userFound){
        res.json(userFound)
    }else{
        res.status(400).json({message:"User not found"})
    }
    
}