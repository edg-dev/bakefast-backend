const restful = require('node-restful');
const mongoose = restful.mongoose;

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: Number, required: true },
    usuario: {
        username: {type:String, required: true},
        senha: {type: String, senha: true}
    }
});

module.exports = restful.model('cliente', clienteSchema);
