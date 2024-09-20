import express from "express";
import cors from "cors";
import cerradurasRoutes from "./routes/cerraduras.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cerradurasRoutes);

export default app;
