require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const Port = 8080;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to db"));

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//-create
const CreateRoute = require("./routes/createTodo");
app.use("/create", CreateRoute);

// -todo's list
const TodoList = require("./routes/TodoList");
app.use("/list", TodoList);

app.use("*", function (req, res) {
  res.status(404).send("<h1>page not found</h1>");
});

app.listen(Port, () => {
  console.log("server runnnig...");
});
