import express from "express";
import getAllGroups from "../controllers/groupControllers.js";
import verifyUser from "../middlewares/verifyUser.js";

const router = express.Router();

router.get("/groups", getAllGroups);

export default router;
