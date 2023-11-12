const mongoose = require("mongoose");

const fixtureSchema = new mongoose.Schema({
  sport: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  teamName:
    {
      type: String,
      required: true,
    },
});

const Fixture = mongoose.model("Fixture", fixtureSchema);

module.exports = Fixture;
