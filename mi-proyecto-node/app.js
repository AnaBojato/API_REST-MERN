const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Para datos codificados desde formularios
app.use(bodyParser.urlencoded({ extended: true }));

// Para analizar objetos JSON en el body
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*", // Permite acceso desde cualquier dominio
  })
);


// Ruta simple para verificar que el servidor funciona
app.get("/status", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Servidor Corriendo",
  });
});

const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;


mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Base de Datos Conectada");
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

module.exports = app;
