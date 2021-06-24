
const route= require('express').Router()
const {registerHospital, loginHospital, individualHospital, upateHospital, addService}= require('../controllers/hospitalControllers')

route.post('/registerHospital', registerHospital)
route.post('/loginHospital', loginHospital)
route.get('/:id', individualHospital)
route.put('/:id/hospitalProfile', upateHospital)
route.post('/:id/services/addservice', addService)


module.exports = route;
