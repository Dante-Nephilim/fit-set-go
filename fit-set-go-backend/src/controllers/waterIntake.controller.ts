import { Request, Response } from "express";
import prisma from "../prisma";

export const getWaterIntake = async (req: Request, res: Response) => {
  try {
    const history = await prisma.waterIntake.findMany({});
    res.json(history);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addWaterIntake = async (req: Request, res: Response) => {
  try {
    const { quantity, date } = req.body;
    await prisma.waterIntake.create({
      data: {
        quantity,
        date,
      },
    });
    res.status(201);
  } catch (err) {
    res.status(500).json(err);
  } finally {
    await prisma.$disconnect();
  }
};
