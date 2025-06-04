const usuarioModel = require("../model/user");

// CREATE
const createUser = async (usuario) => {
    try {
        return await usuario.save();
    } catch (err) {
        throw new Error('Error al guardar los datos en la base de datos');
    }
};

// READ - find all users
const findAllUsers = async () => {
    try {
        return await usuarioModel.find();
    } catch (err) {
        throw new Error('Error al buscar los datos en la base de datos');
    }
};

// READ - find user by ID
const findUserById = async (id) => {
    try {
        return await usuarioModel.findById(id);
    } catch (err) {
        throw new Error('Error al buscar usuario por ID');
    }
};

// UPDATE
const updateUser = async (object) => {
    try {
        return await usuarioModel.findByIdAndUpdate(
            { _id: object.id },
            { email: object.emailUser },
            { new: true }
        );
    } catch (err) {
        throw new Error('Error al actualizar en la base de datos');
    }
};

// DELETE
const deleteUser = async (id) => {
    try {
        return await usuarioModel.findByIdAndDelete({ _id: id });
    } catch (err) {
        throw new Error('Error al eliminar en la base de datos');
    }
};

// EXPORTACIONES CORRECTAS
module.exports = {
    createUser,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser
};
