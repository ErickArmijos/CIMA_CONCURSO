import { Router } from "express";
<<<<<<< HEAD
import { login,logout,register,verifyToken} from "../controller/auth.controller.js";
=======

import { login,logout,register,rolUser,verifyToken } from "../controller/auth.controller.js";

>>>>>>> c64a21fa038a4f3f468a482e945a3dd7b012c7f8
import { validateSchema } from "../middleware/verifySchema.js";
import { registerUserSchema, loginSchema } from "../schemas/usuarios.schema.js";


const router = Router();
router.post("/login",validateSchema(loginSchema), login);
router.post("/register",validateSchema(registerUserSchema),register);
<<<<<<< HEAD
=======
router.get("/rolUser",rolUser);
>>>>>>> c64a21fa038a4f3f468a482e945a3dd7b012c7f8
router.get("/verify", verifyToken);
router.post("/logout", verifyToken, logout);
export default router
