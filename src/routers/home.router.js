const express = require("express");
const router = express.Router();
const Home = require("../usecases/home.usecase");

router.get("/", async (req, res) => {
  const home = await Home.getHome();
  res.json(home);
});
router.post("/", async (req, res) => {
  const newHome = await Home.createHome(req.body);
  res.statusCode = 201;
  res.json(newHome);
});
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const homeInfo = req.body;
  const updateHome = await Home.updateHome(id, homeInfo);
  res.json(updateHome);
});

module.exports = router;
