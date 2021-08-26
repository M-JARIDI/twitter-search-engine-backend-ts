"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv").config();
const express_1 = __importDefault(require("express"));
exports.app = express_1.default();
const cors_1 = __importDefault(require("cors"));
// import Twit from "twit";
// const twitter_client = new Twit({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
// });
exports.app.use(cors_1.default({
    origin: "*",
}));
exports.app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});
exports.app.use(express_1.default.json());
const searchRouter = require("./routes/searchResults");
exports.app.use("/search", searchRouter);
const userRouter = require("./routes/userResults");
exports.app.use("/users", userRouter);
exports.app.get("/", (req, res) => {
    res.status(200).json({ message: "test api" });
});
