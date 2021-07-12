import mongoose from 'mongoose'

const medicSchema= mongoose.Schema({
    name: {type: String, required: true},
    amount: {type: String, required: true},
    weight: {type: String, required: true},
    cost: {type: number, require: true},
    field: {type: String, requied: true}
})

const Medic= mongoose.model('Medic', medicSchema)

modules.exports= Medic