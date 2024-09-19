import express from "express";
import {
  getAllServicesByCategory,
  getAllServices,
  getServicesById,
  createService,
  deleteService,
} from "../controllers/serviceControllers.js";
import verifyUser from "../middlewares/verifyUser.js";

const router = express.Router();

//services routes
router.get("/services", getAllServices);
router.get("/services/:idPRODUCTS", getServicesById);
router.post("/create/service", createService);
router.delete("/delete-product/:id", deleteService);
router.get("/services/category/:idCategory", getAllServicesByCategory);

export default router;
