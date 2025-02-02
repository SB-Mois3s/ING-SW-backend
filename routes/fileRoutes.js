const express = require('express')
const fileController = require('../controllers/fileController')
const upload = require('../middlewares/handleMulter')
const fileSize = require('../middlewares/fileSize')

const api= express.Router()

api.post("/file/:archivo", upload.array('archivos'), fileSize, fileController.uploadNewFile)
api.get('/files/', fileController.getFiles)
api.get('/files/download/:id', fileController.getSpecificFile)
api.delete('/file/delete/:id', fileController.deleteFile)


module.exports = api