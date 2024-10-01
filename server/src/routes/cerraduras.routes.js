import { Router } from "express";
import { estrella, suma } from "../controllers/cerraduras.controller.js";

const router = Router();

router.get("/api/cerradura/estrella/:n", estrella);
router.get("/api/cerradura/positiva/:n", suma);

export default router;
