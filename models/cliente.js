//Aqui fica o modelo (schema) do cliente segundo o tutorial

const restful = require('node-restful');
const mongoose = restful.mongoose;

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: Number, required: true }
});

module.exports = restful.model('cliente', clienteSchema);