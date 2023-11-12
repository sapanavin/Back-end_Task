const express = require("express");
const livePollController = require("../controllers/LivePoll");

const livePollRouter = express.Router();

livePollRouter.get("/", livePollController.getPoll);
livePollRouter.post("/", livePollController.addPoll); 

 

module.exports = livePollRouter;
