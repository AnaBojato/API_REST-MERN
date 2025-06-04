const { Response } = require("../utils/Response");
const UsuarioModel = require("../model/user");
const usuarioRepository = require("../repository/UsuarioRepository");

async function registrarUsuario(req, res) {
  const usuario = new UsuarioModel();
  const { name, lastname, email, password, typeUser } = req.body;

  try {
    // Crear Modelo
    usuario.name = name;
    usuario.lastname = lastname;
    usuario.email = email;
    usuario.password = password;
    usuario.typeUser = typeUser;

    // Guardar en base de datos
    const resp = await usuarioRepository.createUser(usuario);

    if (resp) {
      Response.status = 201;
      Response.message = "Datos guardados correctamente en la base de datos";
      Response.result = resp;
      return res.status(201).send(Response);
    }

  } catch (err) {
    console.error(err);
    Response.status = 500;
    Response.message = err.message;
    return res.status(500).send(Response);
  }
}

module.exports = {
  registrarUsuario,
};
