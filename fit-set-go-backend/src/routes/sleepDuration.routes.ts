import express from "express";
import { getSleepDuration, addSleepDuration } from "../controllers/sleepDuration.controller";

const router = express.Router();

router.get("/", getSleepDuration);
router.post("/", addSleepDuration);

export default router;
