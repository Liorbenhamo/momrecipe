const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Users = require("./Models/Users");
const Recipe = require("./Models/Recipe");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://liorbenhamo:0502730029@cluster0.hzf3enx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB is Connected"))
  .catch((error) => {
    console.log("Connection Failed");
    console.log(error);
  });

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    let data = await Users.find();
    res.send(data);
  } catch (err) {
    res.status(400).json(err.message);
  }
});
app.get("/recipedata", async (req, res) => {
  try {
    let redata = await Recipe.find();
    res.send(redata);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

app.post("/adduser", async (req, res) => {
  try {
    const { username, password, firstname, lastname } = req.body;
    const newUser = new Users({ username, password, firstname, lastname });
    const userAdded = await newUser.save();
    res.status(200).json(userAdded);
  } catch (err) {
    res.status(400).json(err.message);
  }
});
app.post("/addrecipe", async (req, res) => {
  try {
    const { recipename, imgurl, ingredints, makingdescription, tips } =
      req.body;
    const newRecipe = new Recipe({
      recipename,
      imgurl,
      ingredints,
      makingdescription,
      tips,
    });
    const recipeAdded = await newRecipe.save();
    res.status(200).json(recipeAdded);
  } catch (err) {
    res.status(400).json(err.message);
  }
});
app.delete("/delete", async (req, res) => {
  try {
    await Users.deleteOne({ username: req.body.username });
    res.status(200).json("success");
  } catch (err) {
    res.status(400).json(err.message);
  }
});
app.delete("/deletere", async (req, res) => {
  try {
    await Recipe.deleteOne({ _id: req.body._id });
    res.status(200).json("nice");
  } catch (err) {
    res.status(400).json(err.message);
  }
});
app.put("/put", async (req, res) => {
  try {
    let doc = await Users.findOneAndUpdate(req.body._id, req.body);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

app.put("/putre", async (req, res) => {
  console.log(req.body);
  Recipe;
  try {
    console.log(req.body);
    let doc = await Recipe.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err.message, req);
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
