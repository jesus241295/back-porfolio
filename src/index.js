require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const BD_USER = process.env.BD_USER;
const BD_PASS = process.env.BD_PASS;
const BD_HOST = process.env.BD_HOST;
const BD_NAME = process.env.BD_NAME;
const PORT = process.env.PORT;

const URL = `mongodb+srv://${BD_USER}:${BD_PASS}@${BD_HOST}/${BD_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Estamos conectados a la base de datos");
  })
  .catch((error) => {
    console.log("Algo salio mal en la base de datos:", error);
  });

app.listen(PORT, () => {
  console.log(`El servidor se esta ejecutando en el puerto: ${PORT}`);
});
