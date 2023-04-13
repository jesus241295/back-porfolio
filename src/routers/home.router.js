const express = require("express");
const router = express.Router();
const Home = require("../usecases/home.usecase");

router.get("/", async (req, res) => {
  try {
    const home = await Home.getHome();
    res.json(home);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
});
router.post("/", async (req, res) => {
  try {
    const newHome = await Home.createHome(req.body);
    res.statusCode = 201;
    res.json(newHome);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const homeInfo = req.body;
    const updateHome = await Home.updateHome(id, homeInfo);
    res.json(updateHome);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
});

module.exports = router;
