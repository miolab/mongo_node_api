const express = require("express");
const router = express.Router();
const User = require("../models/User");

// routing: db
router.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// routing: test
// app.get("/test_page", (req, res) => res.send("Init test Message."));

module.exports = router;
