//configure dotenv
require("dotenv").config();

//configure express
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { URL } = require("./utils/config");

//importing router
const authRouter = require("./routes/authRouter");
const postRouter = require("./routes/postRouter");
const commentRouter = require("./routes/commentRouter");

//setting up app
const app = express();
app.use(express.json());
app.use(cors());

//configure mongodb
mongoose.set("strictQuery", false);

mongoose
  .connect(URL)
  .then(() => {
    console.log("connected to Mongo DB");
  })
  .catch((err) => {
    console.error(err.message);
  });

//configure api setup
app.get("/", (req, res) => {
  res.send(
    "Welcome to Mini version of a RESTful API for a simple blogging platform."
  );
});

app.use(authRouter);
app.use(postRouter);
app.use(commentRouter);

//exporting app
module.exports = app;
