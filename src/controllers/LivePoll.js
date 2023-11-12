const LivePoll = require("../models/LivePoll");

const getPoll = async (req, res) => {
  try {
    const livePoll = await LivePoll.find();
    res.json(livePoll);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch livePoll" });
  }
};

const addPoll = async (req, res) => {
  try {
    const { question, options } = req.body;
    const livePoll = new LivePoll({ question, options });
    await livePoll.save();
    res.json({ message: "livePoll added successfully", livePoll });
  } catch (err) {
    res.status(500).json({ error: "Could not add a new livePoll" });
  }
};



module.exports = {
  getPoll,
  addPoll,
 
};