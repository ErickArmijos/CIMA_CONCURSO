import { Router } from "express";
import { registerLab,getLabs,updateLab,deleteLab} from "../controller/lab.controller.js";


const router = Router();
router.post("/registerlab",registerLab);
router.get("/traerlab",getLabs);
router.put("/editarLab/:id", updateLab);
router.delete("/eliminarLab/:id", deleteLab);



export default router


