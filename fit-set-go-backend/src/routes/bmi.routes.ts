import express from "express";
import { getBMI, addBMI } from "../controllers/bmi.controller";

const router = express.Router();

router.get("/", getBMI);
router.post("/", addBMI);

export default router;
