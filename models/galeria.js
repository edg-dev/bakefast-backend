const restful = require('node-restful');
const mongoose = restful.mongoose;

const galeriaSchema = new mongoose.Schema({
    idPadaria: { type: String, required: true },
    imagens: [{ type: String, required: true }]
});

module.exports = restful.model('galeria', galeriaSchema);
