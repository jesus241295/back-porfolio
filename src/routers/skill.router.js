const express = require("express");
const Skill = require("../usecases/skill.usecase");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const skillObject = await Skill.getSkill();
    res.json(skillObject);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
});
router.post("/", async (req, res) => {
  try {
    const newSkill = await Skill.creatSkill(req.body);
    res.statusCode = 201;
    res.json(newSkill);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const skillInfo = req.body;
    const updateSkill = await Skill.updateSkill(id, skillInfo);
    res.json(updateSkill);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
});

module.exports = router;
