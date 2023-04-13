const express = require("express");
const About = require("../usecases/about.usecase");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const aboutObject = await About.getAbout();
    res.json(aboutObject);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
});
router.post("/", async (req, res) => {
  try {
    const newAbout = await About.createAbout(req.body);
    res.statusCode = 201;
    res.json(newAbout);
  } catch (error) {
    res.statusCode = 201;
    res.json({ error });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const aboutInfo = req.body;
    const updateAbout = await About.updateAbout(id, aboutInfo);
    res.json(updateAbout);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
});

module.exports = router;
