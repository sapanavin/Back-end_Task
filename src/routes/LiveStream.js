const express = require("express");
const liveStreamController = require("../controllers/LiveStream");

const liveStreamRouter = express.Router();

liveStreamRouter.get("/", liveStreamController.getLiveStreams);
liveStreamRouter.post("/", liveStreamController.addLiveStream);
liveStreamRouter.put("/", liveStreamController.updateLiveStream); 

module.exports = liveStreamRouter;