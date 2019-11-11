//modelo (schema) venda

const restful = require('node-restful');
const mongoose = restful.mongoose;

const pedidoSchema = new mongoose.Schema({
    idPadaria: {type: String, required: true},
    idCliente: {type: String, required: true},
    status : {type: Number, required:true },
    tempoChegada : {type : String, required:true },
    tempoInicio : {type: String, required:true },
    produtos: [{
        nome: {type:String, required:true},
        quantidade: {type:Number, required:true}
    }]
});

module.exports = restful.model('pedido', pedidoSchema);
