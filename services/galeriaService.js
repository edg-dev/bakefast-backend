const galeria = require('../models/galeria');

galeria.methods(['get', 'post', 'put','delete'])

galeria.updateOptions({new: true, runValidators: true})

module.exports = galeria;
