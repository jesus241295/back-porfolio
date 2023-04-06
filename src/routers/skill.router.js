const express = require("express");
const Skill = require("../models/skill.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const skillObject = await Skill.find({});
  res.json(skillObject);
});
router.post("/", async (req, res) => {
  const objectSkill = req.body;
  const newSkill = new Skill(objectSkill);
  await Skill.create(newSkill);
  res.statusCode = 201;
  res.json(newSkill);
});

module.exports = router;
