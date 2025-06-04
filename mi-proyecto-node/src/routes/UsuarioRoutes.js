const express = require('express');
const usuarioController = require('../controller/UsuarioController'); // fijarse que es "controller", no "constrollers"

const api = express.Router();

api.post('/usuarios/registrar', usuarioController.registrarUsuario);

module.exports = api;
