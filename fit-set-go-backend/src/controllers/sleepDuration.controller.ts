import { Request, Response } from "express";
import prisma from "../prisma";

export const getSleepDuration = async (req: Request, res: Response) => {
  try {
    const history = await prisma.sleepDuration.findMany({});
    res.json(history);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addSleepDuration = async (req: Request, res: Response) => {
  try {
    const { duration, date } = req.body;
    await prisma.sleepDuration.create({
      data: {
        duration,
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
