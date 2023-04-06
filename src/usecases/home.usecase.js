const Home = require("../models/home.model");

async function getHome() {
  const home = await Home.find({});
  return home;
}

async function createHome(home) {
  const newHome = new Home(home);
  await Home.create(newHome);

  return newHome;
}
async function updateHome(id, home) {
  const filter = {
    _id: id,
  };
  await Home.findOneAndUpdate(filter, home);
  const updateHome = Home.findOne(filter);
  return updateHome;
}

module.exports = {
  getHome,
  createHome,
  updateHome,
};
