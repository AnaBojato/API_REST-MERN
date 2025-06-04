const usuarioModel = require("../model/user");

// CREATE
module.exports.createUser = async (usuario) => {
    try {
        return await usuario.save();
    } catch (err) {
        throw new Error('Error al guardar los datos en la base de datos');
    }
};

// READ - find all users
module.exports.findAll = async () => {
    try {
        return await usuarioModel.find();
    } catch (err) {
        throw new Error('Error al buscar los datos en la base de datos');
    }
};

// READ - find users by email
module.exports.findByEmail = async (emailUser) => {
    try {
        return await usuarioModel.find({ email: emailUser });
    } catch (err) {
        throw new Error('Error al buscar los datos en la base de datos');
    }
};

// READ - find one user by email
module.exports.findOneEmail = async (emailUser) => {
    try {
        return await usuarioModel.findOne({ email: emailUser });
    } catch (err) {
        throw new Error('Error al buscar los datos en la base de datos');
    }
};

// UPDATE - update user by ID
module.exports.update = async (object) => {
    try {
        return await usuarioModel.findByIdAndUpdate(
            { _id: object.id },
            { email: object.emailUser }
        );
    } catch (err) {
        throw new Error('Error al actualizar en la base de datos');
    }
};

// DELETE - delete user by ID
module.exports.delete = async (id) => {
    try {
        return await usuarioModel.findByIdAndDelete({ _id: id });
    } catch (err) {
        throw new Error('Error al eliminar en la base de datos');
    }
};
