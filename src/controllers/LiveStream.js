const LiveStream = require("../models/LiveStream");

const getLiveStreams = async (req, res) => {
  try {
    const liveStreams = await LiveStream.find().populate("sport", "sportName");
    res.json(liveStreams);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch live streams" });
  }
};

const addLiveStream = async (req, res) => {
  try {
    const { sport, youtubeLink } = req.body;
    const liveStream = new LiveStream({ sport, youtubeLink });
    await liveStream.save();
    res.json({ message: "Live stream added successfully", liveStream });
  } catch (err) {
    res.status(500).json({ error: "Could not add a new live stream" });
  }
};

const updateLiveStream = async (req, res) => {
  try {
    const { liveStreamId, sport, youtubeLink } = req.body;
    const liveStream = await LiveStream.findByIdAndUpdate(
      liveStreamId,
      { sport, youtubeLink },
      { new: true }
    );
    if (!liveStream) {
      return res.status(404).json({ error: "Live stream not found" });
    }
    res.json({ message: "Live stream updated successfully", liveStream });
  } catch (err) {
    res.status(500).json({ error: "Could not update live stream" });
  }
};

module.exports = {
  getLiveStreams,
  addLiveStream,
  updateLiveStream,
};