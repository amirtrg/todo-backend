const express = require("express");
const router = express.Router();

const todo = require("../models/todo");

router.get("/", function (req, res) {
  res.json([
    { type: "text", name: "name", id: 1 },
    { type: "password", name: "password", id: 2 },
  ]);
});

router.post("/", async (req, res) => {
  const newtodo = new todo({
    name: req.body.name,
    password: req.body.password,
  });
  try {
    const resTodo = await newtodo.save();
    res.status(200).json(resTodo);
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
