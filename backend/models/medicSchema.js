const mongoose= require('mongoose')

const medicSchema= mongoose.Schema({
    name: {type: String, required: true},
    aka: {type: String, default: ""},
    weight: {type: String, required: true},
    cost: {type: Number, require: true},
    field: {type: String, requied: true},
    image:{type: String},
    details: {type: String, required: true},
    by: {type: String}
})

const Medic= mongoose.model('Medic', medicSchema)

module.exports= Medic