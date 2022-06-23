const experss = require("express");
const router = experss.Router();

const todo = require("../models/todo");

router.get("/", async (req, res) => {
  const { query } = req;
  if (query.id) {
    const todos = await todo.findOne({ _id: { $eq: query.id } });
    todos ? res.json(todos) : res.status(400).send();
  } else {
    const todos = await todo.find();
    res.json(todos);
  }
});

router.get("/todo", async (req, res) => {
  const { query } = req;
  if (query.id) {
    const todos = await todo.findOne({ _id: { $eq: query.id } });
    todos ? res.json(todos) : res.status(400).send();
  } else {
    res.status(404).send();
  }
});

router.delete("/todo", async (req, res) => {
  const { query } = req;
  if (query.id) {
    const todos = await todo.deleteOne({ _id: { $eq: query.id } });
    res.json(todos);
  } else {
    res.status(404).send();
  }
});

module.exports = router;
