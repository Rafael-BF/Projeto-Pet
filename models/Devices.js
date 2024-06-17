const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose

const devicesSchema = new Schema({
    nome: { type: String, required: true, unique: true},
    descricao: {type: String, required: true},
    email: {type: String, required: true},
    imagem: {type: String, required: true},
    netst: {type: String},
    slug: {type: String, required: true, unique: true, default: function(){ return slug(this.nome)}},
    medidas: []
})

module.exports = mongoose.model('devices', devicesSchema)