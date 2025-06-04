const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Para datos codificados desde formularios
app.use(bodyParser.urlencoded({ extended: true }));

// Para analizar objetos JSON en el body
app.use(bodyParser.json());

// Ruta simple para verificar que el servidor funciona
app.get("/status", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Servidor Corriendo",
  });
});

module.exports = app;
