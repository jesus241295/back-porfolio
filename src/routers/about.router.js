const express = require("express");
const About = require("../usecases/about.usecase");
const router = express.Router();

router.get("/", async (req, res) => {
  const aboutObject = await About.find({});
  res.json(aboutObject);
});
router.post("/", async (req, res) => {
  const newAbout = await About.create(req.body);
  res.statusCode = 201;
  res.json(newAbout);
});
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const aboutInfo = req.body;
  const updateAbout = await About.updateAbout(id, aboutInfo);
  res.json(updateAbout);
});

module.exports = router;
