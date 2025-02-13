import { Request, Response, NextFunction } from "express";

interface ErrorResponse {
  status: number;
  message: string;
  stack?: string;
}

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(`Error: ${err.message}`);

  const errorResponse: ErrorResponse = {
    status: err.status || 500,
    message: err.message || "Internal Server Error",
  };

  if (process.env.NODE_ENV === "development") {
    errorResponse.stack = err.stack;
  }
  res.status(errorResponse.status).json(errorResponse);
};

export default errorHandler;
