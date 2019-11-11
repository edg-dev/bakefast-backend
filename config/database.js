require('dotenv').config();

const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGO_CONNECTIONSTRING , {
    useNewUrlParser: true
});
