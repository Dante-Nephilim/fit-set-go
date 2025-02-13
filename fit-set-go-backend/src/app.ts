import express from "express";
import waterIntakeRoutes from "./routes/waterIntake.routes";
import bmiRoutes from "./routes/bmi.routes";
import sleepDurationRoutes from "./routes/sleepDuration.routes";
import errorHandler from "./middlewares/errorHandler.middleware";
import logger from "./middlewares/logger.middleware";

const app = express();

app.use(express.json());

app.use(logger);

app.use("/api/water-intake", waterIntakeRoutes);
app.use("/api/bmi", bmiRoutes);
app.use("/api/sleep-duration", sleepDurationRoutes);

app.use(errorHandler);

export default app;
