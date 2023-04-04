const express = require("express");
const app = express();
const PORT = 5050;

app.listen(PORT, () => {
  console.log(`El servidor se esta ejecutando en el puerto: ${PORT}`);
});
