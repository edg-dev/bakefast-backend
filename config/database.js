require('dotenv').config();

const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGO_CONNECTIONSTRING , {
    useNewUrlParser: true
}).then(() => {
    console.log('Conexão efetuada com sucesso!');
}).catch(err => {
    console.log('Erro na conexão: ' + err);
});
