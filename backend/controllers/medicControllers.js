const asyncHandler = require("express-async-handler");
const Medic = require('../models/medicSchema')

const addMedicine = asyncHandler(async (req, res) => {
    const { name, weight, cost, field, aka, details } = req.body
    const image= `https://www.nepmeds.com.np/frontend/images/medicine-default-rx.png`
    const by= "Doctor Sahab"
    try {
        if (!name || !weight || !cost || !field) {
            res.status(400)
            throw new Error('Every Field Required')
        }
        const medicine= await new Medic({name, aka, weight, cost , field, image, details, by}).save();
        res.status(200).json(medicine)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

const getAllMedicine= asyncHandler(async(req, res)=>{
    try {
        const medicines= await Medic.find()
        res.status(200).json(medicines)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

const individualMedicine= asyncHandler(async(req, res)=>{
    const medicine= await Medic.findById(req.params.id)
    if(!medicine){
        res.status(400)
        throw new Error('Medicine not found.')
    }
    res.status(200).json(medicine)
})

module.exports= {getAllMedicine, addMedicine, individualMedicine}