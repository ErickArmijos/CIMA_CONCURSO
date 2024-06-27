import { Router } from "express";
import { login,logout,register,profile,verifyToken } from "../controller/auth.controller.js";
import { validateSchema } from "../middleware/verifySchema.js";
import { registerUserSchema, loginSchema } from "../schemas/usuarios.schema.js";


const router = Router();
router.post("/login",validateSchema(loginSchema), login);
router.post("/register",validateSchema(registerUserSchema),register);
router.get("/verify", verifyToken);
router.post("/logout", verifyToken, logout);
export default router
