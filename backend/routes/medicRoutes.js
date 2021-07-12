const route = require("express").Router();
const {getAllMedicine, addMedicine, individualMedicine}= require('../controllers/medicControllers')

route.post('/newmedicine', addMedicine)
route.get('/allmedicine', getAllMedicine)
route.get('/:id', individualMedicine)

module.exports= route