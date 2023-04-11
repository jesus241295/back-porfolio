const Skill = require("../models/skill.model");

async function getSkill() {
  const skill = await Skill.find({});
  return skill;
}
async function creatSkill(skill) {
  const newSkill = new Skill(skill);
  await Skill.create(newSkill);
  return newSkill;
}
async function updateSkill(id, skill) {
  const filter = {
    _id: id,
  };
  await Skill.findOneAndUpdate(filter, skill);
  const updateSkill = Skill.findOne(filter);
  return updateSkill;
}

module.exports = {
  getSkill,
  creatSkill,
  updateSkill,
};
