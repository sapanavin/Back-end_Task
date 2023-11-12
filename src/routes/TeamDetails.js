const express = require("express");
const teamController = require("../controllers/TeamDetails");

const teamRouter = express.Router();

teamRouter.get("/:teamId", teamController.getTeam);
teamRouter.post("/", teamController.addTeam); 

 

module.exports = teamRouter;
