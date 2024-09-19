import express from "express";
import {
  register,
  login,
  logout,
  updateUser,
  deleteUser,
} from "../controllers/authControllers.js";
import db from "../config/dbConfig.js";
import verifyUser from "../middlewares/verifyUser.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import {
  getAllServicesByCategory,
  getAllServices,
  getServicesById,
  createService,
  deleteService,
} from "../controllers/serviceControllers.js";
import {
  getAllCategories,
  getCategoriesbyId,
} from "../controllers/categoriesControllers.js";
import { getAllGroups } from "../controllers/groupControllers.js";
import {
  getAllClients,
  getClientStatus,
} from "../controllers/clientsControllers.js";
import { createProduct } from "../controllers/productControllers.js";
import {
  createDepartment,
  getAllDepartments,
} from "../controllers/departmentControllers.js";
import {
  createStatus,
  deleteStatus,
} from "../controllers/statusControllers.js";
import { createRRHH, getAllRRHH } from "../controllers/rrhhControllers.js";

const router = express.Router();

router.get("/", verifyUser, (req, res) => {
  return res.json({
    Status: "Success",
    email: req.email,
    name: req.name,
    lastname: req.lastname,
    role: req.role,
  });
});

//auth
router.post("/register", verifyAdmin, register);
router.post("/login", login);
router.get("/logout", verifyUser, logout);
router.put("/update/:userId", verifyUser, updateUser);
router.delete("/delete/:userId", verifyUser, deleteUser);

//services
router.get("/services", verifyUser, getAllServices);

//one service
router.get("/services/:idPRODUCTS", verifyUser, getServicesById);

// create service - revisar ids y claves foraneas con el benja
router.post("/create/service", verifyUser, createService);

// delete service
router.delete("/delete-product/:id", verifyUser, deleteService);

// get all categories REVISAR CON BENJA ruta services-catergories
router.get("/categories", verifyUser, getAllCategories);

// get all services of a category
router.get(
  "/services/category/:idCategory",
  verifyUser,
  getAllServicesByCategory
);

// get groups
router.get("/groups", verifyUser, getAllGroups);

// get categories from group by id
router.get("/categories/group/:idGroup", verifyUser, getCategoriesbyId);

// get clients
router.get("/clients", verifyUser, getAllClients);

// get status
router.get("/client-status", verifyUser, getClientStatus);

// create a product
router.post("/create/product", verifyUser, createProduct);

// create department
router.post("/create/department", verifyUser, createDepartment);

// get departments
router.get("/departments", verifyUser, getAllDepartments);

// create status
router.post("/create/status", verifyUser, createStatus);

// create rrhh
router.post("/create/workforce-value", verifyUser, createRRHH);

// get rrhh
router.get("/workforce-values", verifyUser, getAllRRHH);

// delete client status
router.delete("/delete/status/:id", verifyUser, deleteStatus);

export default router;
