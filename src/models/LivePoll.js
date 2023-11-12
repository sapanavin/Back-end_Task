const mongoose = require("mongoose");

const livePollSchema = new mongoose.Schema({
    question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  }
});

const LivePoll = mongoose.model("LivePoll", livePollSchema);

module.exports = LivePoll;
