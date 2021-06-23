const route= require('express').Router()
const asyncHandler= require('express-async-handler')
const Hospitals= require('../models/hospitalSchema')

const registerHospital= asyncHandler(async(req, res)=>{
    try {
        const {name, address, email, password, contact1, contact2}= await req.body
        if(!name ||  !address || !email || !password || !contact1 || !contact2 ){
            res.status(400)
            throw new Error('ALL FIELDS REQUIRED')
        }
        const existHospital= await Hospitals.findOne({email})
        if(!existHospital){
            const newHopital= new Hospitals({name, address, email, password, contact1, contact2}).save((err, hospital)=>{
                if(err){
                    res.status(400)
                    throw new Error(err)
                }
                if(hospital){
                    res.status(200).json({hospital})
                }
            })
        }else{
            res.status(400)
            throw new Error('EMAIL ALREADY REGISTERED')
        }

    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

const loginHospital= asyncHandler(async(req, res)=>{
    try {
        const {email, password}= await req.body;
        if(!email || !password){
            res.status(400)
            throw new Error('ALL FIELDS REQUIRED')
        }

        const existHospital= await Hospitals.findOne({email: email})
        if(existHospital && await existHospital.matchPassword(password)){
            res.status(200).json(existHospital)
        }else{
            res.status(404)
            throw new Error('Invalid Credientials')
        }
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

const individualHospital= asyncHandler(async(req, res)=>{
    try {
        const hospital= await Hospitals.findById(req.param.id).select("-password")
        res.status(200).json(hospital)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
module.exports= {registerHospital, loginHospital, individualHospital}