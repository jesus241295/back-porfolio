const About = require("../models/about.model");

async function getAbout() {
  const filter = {};
  const home = await About.find(filter);
  return home;
}
async function createAbout(about) {
  const newAbout = new About(about);
  await About.create(newAbout);

  return newAbout;
}
async function updateAbout(id, about) {
  const filter = {
    _id: id,
  };
  await About.findOneAndUpdate(filter, about);
  const updateAbout = About.findOne(filter);
  return updateAbout;
}

module.exports = {
  getAbout,
  createAbout,
  updateAbout,
};
