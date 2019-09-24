//modelo (schema) venda

const restful = require('node-restful');
const mongoose = restful.mongoose;

const vendaSchema = new mongoose.Schema({
    status : {type: Boolean, required:true },
    tempoChegada : {type : Number, required:true },
    valorTotal : {type: Number, required:true},
    produtos: [
        {nome: {type:String, required:true}},
        {quantidade: {type:Number, required:true}}
    ]
})

module.exports = restful.model('venda', vendaSchema);