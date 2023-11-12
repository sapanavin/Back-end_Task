const TeamDetails = require("../models/teamDetails");

const getTeam = async (req, res) => {
  try {
    const teamId =req.param("teamId");
    console.log("teamId  ", teamId);
   // const teamDetails = await TeamDetails.findOne({ teamId });
    const teamDetails = await TeamDetails.find();

    res.json(teamDetails);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch teamDetails" });
  }
};

const addTeam = async (req, res) => {
  try {
    const { teamName, teamId, teamMembers } = req.body;
    const teamDetails = new TeamDetails({ teamName, teamId, teamMembers });
    await teamDetails.save();
    res.json({ message: "teamDetails added successfully", teamDetails });
  } catch (err) {
    res.status(500).json({ error: "Could not add a new teamDetails" });
  }
};


module.exports = {
  getTeam,
  addTeam
};