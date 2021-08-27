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

router.get("/:user_id", (req: Request, res: Response) => {
  const user_id: number = parseInt(req.params.user_id);

  // https://api.twitter.com/1.1/users/show.json
  twitter_client.get(
    "users/show",
    { user_id: user_id },
    function (err, userDetails, response) {
      if (!err) {
        res.status(200).json(userDetails);
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
