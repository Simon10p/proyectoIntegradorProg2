const express = require("express")
const router = express.Router()
const remerasController = require('../controllers/productControllers')

router.get('/', remerasController.index)
//router.get('/detalle/:id?', remerasController.detalle)

module.exports = router