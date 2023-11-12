const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    poolName: {
    type: String,
    required: true,
  },
  teams: {
    type: Array,
    required: true,
  },
  sports:
    {
      type: String,
      required: true,
    },
    venue:
    {
      type: String,
      required: true,
    },
    date:
    {
      type: Date,
      required: true,
    },
    time:
    {
      type: String,
      required: true,
    },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
