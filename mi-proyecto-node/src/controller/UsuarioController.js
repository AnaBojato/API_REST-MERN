const { Response } = require("../utils/Response");
const UsuarioModel = require("../model/user");
const usuarioRepository = require("../repository/UsuarioRepository");

// POST: Registrar usuario
async function registrarUsuario(req, res) {
  const usuario = new UsuarioModel(req.body);

  try {
    const resp = await usuarioRepository.createUser(usuario);
    return res.status(201).send({
      status: 201,
      message: "Usuario registrado exitosamente",
      result: resp,
    });
  } catch (err) {
    return res.status(500).send({ status: 500, error: err.message });
  }
}

// GET: Obtener todos los usuarios
async function obtenerUsuarios(req, res) {
  try {
    const usuarios = await usuarioRepository.findAllUsers();
    return res.status(200).send(usuarios);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

async function buscarPorId(req, res) {
  try {
    const id = req.params.id;
    const usuario = await usuarioRepository.findUserById(id);
    if (!usuario) {
      return res.status(404).send({ message: "Usuario no encontrado" });
    }
    return res.status(200).send(usuario);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}



// PUT: Actualizar usuario por ID
async function actualizarUsuario(req, res) {
  const { id } = req.params;
  const { email } = req.body;

  try {
    const actualizado = await usuarioRepository.updateUser({ id, emailUser: email });
    if (!actualizado) {
      return res.status(404).send({ message: "Usuario no encontrado para actualizar" });
    }
    return res.status(200).send({ message: "Usuario actualizado", result: actualizado });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

// DELETE: Eliminar usuario por ID
async function eliminarUsuario(req, res) {
  const { id } = req.params;

  try {
    const eliminado = await usuarioRepository.deleteUser(id);
    if (!eliminado) {
      return res.status(404).send({ message: "Usuario no encontrado para eliminar" });
    }
    return res.status(200).send({ message: "Usuario eliminado correctamente" });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

module.exports = {
  registrarUsuario,
  obtenerUsuarios,
  buscarPorId, 
  actualizarUsuario,
  eliminarUsuario,
};

