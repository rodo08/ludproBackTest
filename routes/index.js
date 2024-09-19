import express from "express";
import authRoutes from "./authRoutes.js";
import serviceRoutes from "./serviceRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import clientRoutes from "./clientRoutes.js";
import productRoutes from "./productRoutes.js";
import departmentRoutes from "./departmentRoutes.js";
import rrhhRoutes from "./rrhhRoutes.js";
import statusRoutes from "./statusRoutes.js";
import groupRoutes from "./groupRoutes.js";

const router = express.Router();

router.use(authRoutes);
router.use(serviceRoutes);
router.use(categoryRoutes);
router.use(clientRoutes);
router.use(productRoutes);
router.use(departmentRoutes);
router.use(rrhhRoutes);
router.use(statusRoutes);
router.use(groupRoutes);

export default router;
