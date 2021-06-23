
const route= require('express').Router()
const {registerHospital, loginHospital, individualHospital}= require('../controllers/hospitalControllers')
route.post('/registerHospital', registerHospital)
route.post('/loginHospital', loginHospital)
route.get('/:id', individualHospital)
module.exports = route;
