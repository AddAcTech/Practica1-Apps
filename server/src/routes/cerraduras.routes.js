import { Router } from "express";
import { estrella, suma } from "../controllers/cerraduras.controller.js";

const router = Router();

router.get("/cerradura/:n", estrella);
router.get("/cerradura/suma/:n", suma);

export default router;
