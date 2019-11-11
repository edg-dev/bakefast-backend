const restful = require('node-restful');
const mongoose = restful.mongoose;

const cardapioSchema = new mongoose.Schema({
    idPadaria: { type: String, required: true },
    imagem: { type: String, required: true }
});

module.exports = restful.model('cardapio', cardapioSchema);
