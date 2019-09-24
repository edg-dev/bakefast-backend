const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://bakefastapp:bake7789@bakefasttest-cnlc4.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
