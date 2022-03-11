const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    marca_id: {type: Number, required: true},
    marca_nome: {type: String, required: true},
    nome_modelo: {type: String, required: true},
    ano: {type:Number, required: true},
    combustivel: {type: String, required: true},
    num_portas: {type: Number, required: true},
    valor_fipe: {type: Number, required: true},
    cor: {type: String, required: true},
    timestamp_cadastro: {type: Number, default: Date.now()}
})

module.exports = mongoose.model('Cars', carSchema)
