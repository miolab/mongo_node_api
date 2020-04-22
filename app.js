const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Init test message."));

app.listen(port, () => {
  console.log("Test Server running", `http://localhost:${port}`);
});
