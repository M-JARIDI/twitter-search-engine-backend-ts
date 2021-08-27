require("dotenv").config();

import express, { Response, Request } from "express";

const router = express.Router();

import Twit from "twit";

export const twitter_client = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || "",
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || "",
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || "",
});

router.get("/", (req: Request, res: Response) => {
  const searchKeyword: any = req.query.q;

  //https://api.twitter.com/1.1/search/tweets.json
  twitter_client.get(
    "search/tweets",
    { q: searchKeyword, count: 100 },
    function (err: any, tweets: any, response: any) {
      if (!err) {
        console.log("tweets", tweets);
        res.status(200).json(tweets);
      } else {
        return res.status(500).json({
          title: "An error has occured",
          error: err,
        });
      }
    }
  );
});
module.exports = router;
