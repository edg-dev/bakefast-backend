//modelo (schema) notificacoes

const restful = require('node-restful');
const mongoose = restful.mongoose;

const notificacoesSchema = new mongoose.Schema({
    texto : {type: String, required:true },
    tipo :  {type: String, required:true }
})

module.exports = restful.model('notificacoes', notificacoesSchema);