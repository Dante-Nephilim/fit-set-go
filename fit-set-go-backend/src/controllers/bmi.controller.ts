import { Request, Response } from "express";
import prisma from "../prisma";

export const getBMI = async (req: Request, res: Response) => {
  try {
    const history = await prisma.bMI.findMany({});
    res.json(history);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addBMI = async (req: Request, res: Response) => {
  try {
    const { weight, height, bmi, date } = req.body;
    await prisma.bMI.create({
      data: {
        weight,
        height,
        bmi,
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
