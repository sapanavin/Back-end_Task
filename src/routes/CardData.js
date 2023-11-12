const express = require("express");
const userController = require("../controllers/CardData");

const cardDataRouter = express.Router();

cardDataRouter.get("/", userController.getLiveMatchCard);
cardDataRouter.post("/", userController.addLiveMatchCard); 

 

module.exports = cardDataRouter;
