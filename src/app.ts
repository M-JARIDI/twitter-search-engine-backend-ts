require("dotenv").config();

import express, { Application, Response, Request, NextFunction } from "express";
export const app: Application = express();

import cors from "cors";

app.use(
  cors({
    origin: "*",
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

const searchRouter = require("./routes/searchResults");
app.use("/search", searchRouter);

const userRouter = require("./routes/userResults");
app.use("/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "test api" });
});
