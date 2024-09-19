import express from "express";
import {
  register,
  login,
  logout,
  updateUser,
  deleteUser,
} from "../controllers/authControllers.js";
import verifyUser from "../middlewares/verifyUser.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";

const router = express.Router();

//auth routes
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.put("/update/:userId", updateUser);
router.delete("/delete/:userId", deleteUser);

export default router;
