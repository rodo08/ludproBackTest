import express from "express";
import {
  getAllCategories,
  getCategoriesbyId,
} from "../controllers/categoriesControllers.js";
import verifyUser from "../middlewares/verifyUser.js";

const router = express.Router();

//categories routes
router.get("/categories", getAllCategories);
router.get("/categories/group/:idGroup", getCategoriesbyId);

export default router;
