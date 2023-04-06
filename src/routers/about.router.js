const express = require("express");
const About = require("../models/about.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const aboutObject = await About.find({});
  res.json(aboutObject);
});
router.post("/", async (req, res) => {
  const objectAbout = req.body;
  const newAbout = new About(objectAbout);
  await About.create(newAbout);
  res.statusCode = 201;
  res.json(newAbout);
});

module.exports = router;
