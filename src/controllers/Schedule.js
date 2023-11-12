const Schedule = require("../models/Schedule");

const getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.find();
    res.json(schedule);
  } catch (err) {
    console.log(err);
        res.status(500).json({ error: "Could not fetch Schedule" });
  }
};

const addSchedule = async (req, res) => {
  try {
    const { poolName, teams, sports, venue, date, time } = req.body;
    const schedule = new Schedule({ poolName, teams, sports, venue, date, time });
    await schedule.save();
    res.json({ message: "schedule added successfully", schedule });
  } catch (err) {
    res.status(500).json({ error: "Could not add a new schedule" });
  }
};



module.exports = {
getSchedule,
  addSchedule
};