import express from "express";
import { createProduct } from "../controllers/productControllers.js";
import verifyUser from "../middlewares/verifyUser.js";

const router = express.Router();

//product routes
router.post("/create/product", createProduct);

export default router;
