const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  hobby: String,
});

module.exports = mongoose.model("User", userSchema);
