const express = require("express");
const Skill = require("../usecases/skill.usecase");
const router = express.Router();

router.get("/", async (req, res) => {
  const skillObject = await Skill.getSkill();
  res.json(skillObject);
});
router.post("/", async (req, res) => {
  const objectSkill = req.body;
  const newSkill = new Skill(objectSkill);
  await Skill.create(newSkill);
  res.statusCode = 201;
  res.json(newSkill);
});
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const skillInfo = req.body;
  const updateSkill = await Skill.updateSkill(id, skillInfo);
  res.json(updateSkill);
});

module.exports = router;
