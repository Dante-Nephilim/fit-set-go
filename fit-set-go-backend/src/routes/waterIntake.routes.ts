import express from "express";
import { getWaterIntake, addWaterIntake } from "../controllers/waterIntake.controller";
const router = express.Router();

router.get("/", getWaterIntake);
router.post("/", addWaterIntake);

export default router;
