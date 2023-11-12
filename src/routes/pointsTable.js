const express = require("express");
const pointsTableController = require("../controllers/pointsTable");

const pointsTableRouter = express.Router();

pointsTableRouter.get("/", pointsTableController.getPointsTable);
pointsTableRouter.put("/", pointsTableController.updatePoints);
pointsTableRouter.post("/", pointsTableController.addTeam);

module.exports = pointsTableRouter;