const mongoose = require('mongoose')

const brandSchema = mongoose.Schema({
    marca_nome: {type: String, required: true},
    marca_id: {type: Number, required: true}
})

module.exports = mongoose.model('Brands', brandSchema)