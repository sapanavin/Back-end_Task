const PointsTable = require("../models/pointsTable");

const getPointsTable = async (req, res) => {
  try {
    const pointsTable = await PointsTable.find().sort({ points: -1 });
    res.json(pointsTable);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch points table data" });
  }
};

const addTeam = async (req, res) => {
  try {
    const { teamName } = req.body;
    const team = new PointsTable({ teamName });
    await team.save();
    res.json({ message: "Team added successfully", team });
  } catch (err) {
    res.status(500).json({ error: "Could not add a new team" });
  }
};

const updatePoints = async (req, res) => {
  try {
    const { teamId, points, rank , X , A, M , NRR} = req.body;
    const team = await PointsTable.findById(teamId);
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    team.points = points;
    team.rank = rank;
    team.X = X;
    team.A = A;
    team.M = M;
    team.NRR = NRR;

    await team.save();
    res.json({ message: "TeamPointsData updated successfully", team });
  } catch (err) {
    res.status(500).json({ error: "Could not update TeamPointsData" });
  }
};

module.exports = {
  getPointsTable,
  addTeam,
  updatePoints,
};