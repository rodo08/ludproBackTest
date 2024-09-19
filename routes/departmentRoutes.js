import express from "express";
import {
  createDepartment,
  getAllDepartments,
} from "../controllers/departmentControllers.js";
import verifyUser from "../middlewares/verifyUser.js";

const router = express.Router();

//department routes
router.post("/create/department", createDepartment);
router.get("/departments", getAllDepartments);

export default router;
