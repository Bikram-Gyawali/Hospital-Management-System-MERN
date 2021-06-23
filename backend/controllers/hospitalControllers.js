const route= require('express').Router()
const asyncHandler= require('express-async-handler')

const hiHospital= asyncHandler(async(req, res)=>{
    res.send('hi')
})

module.exports= hiHospital