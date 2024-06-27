import { Router } from "express";
import { registerReser,getReservas } from "../controller/reser.controller.js";

const router = Router();

router.post("/nuevaReservacion",registerReser);
router.get("/obtnerReservaciones",getReservas)
router.delete/("/eliminarReservacion")



export default router;