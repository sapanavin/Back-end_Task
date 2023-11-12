const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    teamName: {
    type: String,
    required: true,
  },
  teamId: {
    type: Number,
    required: true,
  },
  teamMembers:
    {
      type: Array,
      required: true,
    },
});

const TeamDetails = mongoose.model("TeamDetails", teamSchema);

module.exports = TeamDetails;
