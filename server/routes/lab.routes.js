import { Router } from "express";
import { registerLab,getLabs} from "../controller/lab.controller.js";


const router = Router();
router.post("/registerlab",registerLab);
router.get("/traerlab",getLabs);

export default router


