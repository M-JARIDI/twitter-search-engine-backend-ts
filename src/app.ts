require("dotenv").config();

import express, { Application, Response, Request, NextFunction } from "express";
export const app: Application = express();

import cors from "cors";

// import Twit from "twit";

// const twitter_client = new Twit({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
// });

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
