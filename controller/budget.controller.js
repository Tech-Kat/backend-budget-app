const express = require("express");

const info = express.Router();

const budgetArr = require("../models/budget.js");

const { validate } = require("../models/validation.js");

info.get("/", (req, res) => {
  res.json(budgetArr);
});

//Show
info.get("/:indexArr", validate, (req, res) => {
  const { indexArr } = req.params;

  if (budgetArr[indexArr]) {
    res.send(budgetArr[Number(indexArr)]);
  } else {
    res.redirect("/");
  }
});

//Create
info.post("/", validate, (req, res) => {
  budgetArr.push(req.body);
  res.json(budgetArr[budgetArr.length - 1]);
});

//Edit
info.put("/:indexArr", (req, res) => {
  budgetArr[req.params.indexArr] = req.body;
  res.status(200).json(budgetArr[req.params.indexArr]);
});

// DELETE
info.delete("/:indexArr", (req, res) => {
  const deletedBudget = budgetArr.splice(req.params.indexArr, 1);
  res.status(200).json(deletedBudget);
});
module.exports = info;
