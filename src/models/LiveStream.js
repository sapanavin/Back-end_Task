const mongoose = require("mongoose");

const liveStreamSchema = new mongoose.Schema({
  sport: {
    type: String,
    required: true,
  },
  youtubeLink: {
    type: String,
    required: true,
  },
});

const LiveStream = mongoose.model("LiveStream", liveStreamSchema);

module.exports = LiveStream;
