const mongoose = require("mongoose");

const TeamMemberSchema = mongoose.Schema({
  name: String,
  age: Number,
  designation: String,
  image:String
});

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
      type: TeamMemberSchema,
      required: true,
    },
});

  

const TeamDetails = mongoose.model("TeamDetails", teamSchema);

module.exports = TeamDetails;
