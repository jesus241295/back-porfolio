const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  author: {
    type: String,
    minlength: 10,
    maxlength: 50,
    required: true,
  },
  presentation: {
    type: String,
    required: true,
  },
  description: String,
});
const Home = mongoose.model("home", homeSchema);

module.exports = Home;
