require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
mongoose.pluralize(null);
const app = express();
const homeRouter = require("./routers/home.router");
const aboutRouter = require("./routers/about.router");
const skillRouter = require("./routers/skill.router");

const BD_USER = process.env.BD_USER;
const BD_PASS = process.env.BD_PASS;
const BD_HOST = process.env.BD_HOST;
const BD_NAME = process.env.BD_NAME;
const PORT = process.env.PORT;
app.use(express.json());
const URL = `mongodb+srv://${BD_USER}:${BD_PASS}@${BD_HOST}/${BD_NAME}?retryWrites=true&w=majority`;
app.use("/home", homeRouter);
app.use("/about", aboutRouter);
app.use("/skill", skillRouter);

mongoose
  .connect(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`El servidor se esta ejecutando en el puerto: ${PORT}`);
    });
    console.log("Estamos conectados a la base de datos");
  })
  .catch((error) => {
    console.log("Algo salio mal en la base de datos:", error);
  });
