const mongoose = require("mongoose");

const dreamSchema = new mongoose.Schema({
  user_uuid: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("dream", dreamSchema);
