import { Router } from "express";
import routerAuth from "./auth.routes.js";
import routerLab from "./lab.routes.js";


const router = Router();
router.use("/api",routerAuth,routerLab);


export default router;