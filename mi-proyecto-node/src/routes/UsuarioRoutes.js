const express = require('express');
const usuarioController = require("../controller/UsuarioController");

const api = express.Router();

/**
 * @swagger
 * /usuarios/registrar:
 *   post:
 *     description: Registra un nuevo usuario
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: usuario
 *         description: Datos del usuario a registrar
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - lastname
 *             - email
 *             - password
 *             - typeUser
 *           properties:
 *             name:
 *               type: string
 *             lastname:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             typeUser:
 *               type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 */
api.post('/usuarios/registrar', usuarioController.registrarUsuario);

/**
 * @swagger
 * /usuarios:
 *   get:
 *     description: Obtiene todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
api.get('/usuarios', usuarioController.obtenerUsuarios);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     description: Obtiene un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 */
api.get('/usuarios/:id', usuarioController.buscarPorId);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     description: Actualiza un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *       - in: body
 *         name: usuario
 *         description: Datos para actualizar
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             lastname:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             typeUser:
 *               type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
api.put('/usuarios/actualizar/:id', usuarioController.actualizarUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     description: Elimina un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
api.delete('/usuarios/eliminar/:id', usuarioController.eliminarUsuario);


module.exports = api;
