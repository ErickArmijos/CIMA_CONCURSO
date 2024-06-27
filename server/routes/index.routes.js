import { Router } from "express";
import routerAuth from "./auth.routes.js";
import routerLab from "./lab.routes.js";
import routerReservaciones from "./reservas.routes.js"

const router = Router();
router.use("/api",routerAuth);
router.use("/lab",routerLab)
router.use("/reservaciones",routerReservaciones);



export default router;