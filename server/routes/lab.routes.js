import { Router } from "express";
import { registerLab,getLabs,updateLab} from "../controller/lab.controller.js";


const router = Router();
router.post("/registerlab",registerLab);
router.get("/traerlab",getLabs);
router.put("/updlab",updateLab)


export default router


