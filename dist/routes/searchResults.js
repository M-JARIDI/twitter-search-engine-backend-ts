"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitter_client = void 0;
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const twit_1 = __importDefault(require("twit"));
exports.twitter_client = new twit_1.default({
    consumer_key: process.env.TWITTER_CONSUMER_KEY || "",
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET || "",
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || "",
});
router.get("/", (req, res) => {
    const searchKeyword = req.query.q;
    //https://api.twitter.com/1.1/search/tweets.json
    exports.twitter_client.get("search/tweets", { q: searchKeyword, count: 100 }, function (err, tweets, response) {
        if (!err) {
            res.status(200).json(tweets);
        }
        else {
            return res.status(500).json({
                title: "An error has occured",
                error: err,
            });
        }
    });
});
module.exports = router;
