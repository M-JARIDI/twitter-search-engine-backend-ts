"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const searchData_1 = require("../data/searchData");
// const twitter_client = require('../app');
router.get("/", (req, res) => {
    //   const searchKeyword: string = req.query.q;
    //for test
    res.status(200).json(searchData_1.searchData);
    //https://api.twitter.com/1.1/search/tweets.json
    //  search twitter for all tweets containing the word '${searchKeyword}'
    // twitter_client.get('search/tweets', { q: searchKeyword , count: 100 }, function(err, tweets, response) {
    //   if (!err) {
    //     res.status(200).json(tweets);
    //  }
    //  else {
    //    return res.status(500).json({
    //      title: 'An error has occured',
    //      error: err
    //    })
    //  }
    //});
});
module.exports = router;
