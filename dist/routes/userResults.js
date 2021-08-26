"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// const twitter_client = require('../app');
const userData_1 = require("../data/userData");
router.get("/:user_id", (req, res) => {
    const user_id = parseInt(req.params.user_id);
    const user = userData_1.userData.filter((item) => item.user_id == user_id);
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
