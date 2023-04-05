const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  name: String,
  presentation: String,
  description: String,
});
const Home = mongoose.model("home", homeSchema);

module.exports = Home;
