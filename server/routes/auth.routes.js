import { Router } from "express";
import { login,logout,register,profile } from "../controller/auth.controller.js";
import { validateSchema } from "../middleware/verifySchema.js";
import { registerUserSchema, loginSchema } from "../schemas/usuarios.schema.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();
router.post("/login",validateSchema(loginSchema), login);
router.post("/register",validateSchema(registerUserSchema),register);
router.post("/logout",logout);
router.get("/profile",verifyToken,)

export default router
