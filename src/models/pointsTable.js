const mongoose = require("mongoose");

const pointsTableSchema = new mongoose.Schema({
  rank: {
    type: Number,
    default: 0,
  },
  teamName: {
    type: String,
    required: true,
  },
  X: {
    type: Number,
    default: 0,
  },
  A: {
    type: Number,
    default: 0,
  },
  M: {
    type: Number,
    default: 0,
  },
  NRR: {
    type: Number,
    default: 0.0,
    
  }
  
});

const PointsTable = mongoose.model("PointsTable", pointsTableSchema);

module.exports = PointsTable;