const route = require('express').Router()
// const { v4: uuidv4 } = require('uuid');
const path= require('path');

const {saveReports, downloadReport}=require('../controllers/reportControllers')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/reports')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

route.post('/:id/uploadreport', upload.single('report'), saveReports)
route.get('/:id/downloadreport', downloadReport)

module.exports= route