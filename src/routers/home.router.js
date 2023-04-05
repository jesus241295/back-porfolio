const express = require("express");
const Home = require("../models/home.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const home = await Home.find({});
  res.json(home);
});
router.post("/", async (req, res) => {
  const objectHome = req.body;
  const newHome = new Home(objectHome);
  await Home.create(newHome);
  res.statusCode = 201;
  res.json(newHome);
});

module.exports = router;
