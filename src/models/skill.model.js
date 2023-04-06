const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
  titleSkill: String,
  imgSkill: String,
});
const Skill = mongoose.model("skill", skillSchema);

module.exports = Skill;
