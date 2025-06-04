const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UsuariosSchema = schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Ejemplo de campo que referencia a otro documento (por si se necesita más adelante)
// userId: { type: schema.ObjectId, ref: "usuarios_collection" }

module.exports = mongoose.model("usuarios_collection", UsuariosSchema);
