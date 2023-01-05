const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const budController = require("./controller/budget.controller.js");

app.use("/budget", budController);

app.get("/", (req, res) => {
  res.send("Welcome To My Budget App");
});

app.get("*", (req, res) => {
  res.status(404).json({
    error: "Page not Found"
  });
});

module.exports = app;
