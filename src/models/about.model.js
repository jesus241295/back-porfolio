const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  title: String,
  history: String,
  img: String,
});
const About = mongoose.model("about", aboutSchema);

module.exports = About;
