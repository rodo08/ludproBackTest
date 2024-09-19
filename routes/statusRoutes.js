import express from "express";
import {
  createStatus,
  deleteStatus,
} from "../controllers/statusControllers.js";
import verifyUser from "../middlewares/verifyUser.js";

const router = express.Router();

//status routes
router.post("/create/status", createStatus);
router.delete("/delete/status/:id", deleteStatus);

export default router;
