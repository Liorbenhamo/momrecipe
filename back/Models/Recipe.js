const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
  recipename: {
    type: String,
    required: true,
  },
  imgurl: {
    type: String,
  },
  ingredints: {
    type: String,
    required: true,
  },
  makingdescription: {
    type: String,
    required: true,
  },
  tips: {
    type: String,
  },
});
module.exports = mongoose.model("recipe", recipesSchema);
