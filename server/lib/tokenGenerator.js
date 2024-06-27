import jwt from "jsonwebtoken";
import "dotenv/config"
const secretKey = process.env.SECRET_KEY;

export const tokenGenerator = (payload)=>{
   return new Promise((resolve,reject)=>{
    jwt.sign(payload,secretKey,{
        expiresIn:"1d"
    },(error,encoded)=>{
        if(error) return reject(error);
        return resolve(encoded)
    })
   })
}