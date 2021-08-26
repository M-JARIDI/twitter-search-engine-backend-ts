import express, { Response, Request } from "express";

const router = express.Router();

import { searchData } from "../data/searchData";

// const twitter_client = require('../app');

router.get("/", (req: Request, res: Response) => {
  //   const searchKeyword: string = req.query.q;

  //for test
  res.status(200).json(searchData);

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
