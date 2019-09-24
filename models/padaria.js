//modelo (schema) padaria

const restful = require('node-restful');
const mongoose = restful.mongoose;

const padariaSchema = new mongoose.Schema({
    nome : {type: String, required:true },
    endereco : [ 
        { rua: {type:String, required:true}},
        { numero: {type:Number, required:true}},
        { bairro: {type:String, required:true}},
        { complemento: {type:String, required:false}}
    ]
})

module.exports = restful.model('padaria', padariaSchema);