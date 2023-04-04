const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  name: String,
  history: String,
  img: Array,
});
const About = mongoose.model("about-me", aboutSchema);

module.exports = About;
