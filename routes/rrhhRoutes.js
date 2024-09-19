import express from "express";
import { createRRHH, getAllRRHH } from "../controllers/rrhhControllers.js";
import verifyUser from "../middlewares/verifyUser.js";

const router = express.Router();

//rrhh routes
router.post("/create/workforce-value", createRRHH);
router.get("/workforce-values", getAllRRHH);

export default router;
