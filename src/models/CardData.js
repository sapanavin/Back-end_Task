const mongoose = require("mongoose");

const cardDataSchema = new mongoose.Schema({
    hometeam: {
    type: String,
    required: true,
  },
  hometeamscore: {
    type: Number,
    required: true,
  },
  awayteam:
    {
      type: String,
      required: true,
    },
    awayteamscore: {
        type: Number,
        required: true,
      }
});

const CardData = mongoose.model("CardData", cardDataSchema);

module.exports = CardData;
