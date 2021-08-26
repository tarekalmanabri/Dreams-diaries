const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: true,
};

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: reqString,
  password: reqString,
  token: { type: String },
});

module.exports = mongoose.model("user", UserSchema);
