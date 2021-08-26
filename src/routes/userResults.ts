import express, { Response, Request } from "express";

const router = express.Router();

// const twitter_client = require('../app');
import { userData } from "../data/userData";

router.get("/:user_id", (req: Request, res: Response) => {
  const user_id: number = parseInt(req.params.user_id);
  const user = userData.filter((item) => item.user_id == user_id);
  res.status(200).json(user);

  // https://api.twitter.com/1.1/users/show.json
  //twitter_client.get('users/show', { q: user_id, count: 100 }, function(err, userDetails, response) {
  //   if (!err) {
  //     res.status(200).json(userDetails);
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
