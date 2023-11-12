const Fixture = require("../models/Fixture");

const getFixtures = async (req, res) => {
  try {
    const fixtures = await Fixture.find().populate("sport", "sportName");
    res.json(fixtures);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch fixtures" });
  }
};

const addFixture = async (req, res) => {
  try {
    const { sport, date, teamName } = req.body;
    const fixture = new Fixture({ sport, date, teamName });
    await fixture.save();
    res.json({ message: "Fixture added successfully", fixture });
  } catch (err) {
    res.status(500).json({ error: "Could not add a new fixture" });
  }
};

const updateFixture = async (req, res) => {
  try {
    const { fixtureId, sport, date, teamName } = req.body;
    const fixture = await Fixture.findByIdAndUpdate(
      fixtureId,
      { sport, date, teamName },
      { new: true }
    );
    if (!fixture) {
      return res.status(404).json({ error: "Fixture not found" });
    }
    return res.json({ message: "Fixture updated successfully", fixture });
  } catch (err) {
    return res.status(500).json({ error: "Could not update fixture" });
  }
};

module.exports = {
  getFixtures,
  addFixture,
  updateFixture,
};