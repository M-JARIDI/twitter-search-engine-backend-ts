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
router.get("/:user_id", (req, res) => {
    const user_id = parseInt(req.params.user_id);
    // https://api.twitter.com/1.1/users/show.json
    exports.twitter_client.get("users/show", { user_id: user_id }, function (err, userDetails, response) {
        if (!err) {
            res.status(200).json(userDetails);
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
