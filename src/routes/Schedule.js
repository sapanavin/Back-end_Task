const express = require("express");
const scheduleController = require("../controllers/Schedule");

const scheduleRouter = express.Router();

scheduleRouter.get("/", scheduleController.getSchedule);
scheduleRouter.post("/", scheduleController.addSchedule); 

 

module.exports = scheduleRouter;
