const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const dbConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect("mongodb://127.0.0.1/test_api_db", dbConnectOptions);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "DB connection Error:"));
db.once("open", () => console.log("DB connection succeed."));

app.get("/", (req, res) => res.send("Init test Message."));

app.listen(port, () => {
  console.log("Test Server running", `http://localhost:${port}`);
});
