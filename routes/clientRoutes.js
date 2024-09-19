import express from "express";
import {
  getAllClients,
  getClientStatus,
} from "../controllers/clientsControllers.js";
import verifyUser from "../middlewares/verifyUser.js";

const router = express.Router();

//clients routes
router.get("/clients", getAllClients);
router.get("/client-status", getClientStatus);

export default router;
