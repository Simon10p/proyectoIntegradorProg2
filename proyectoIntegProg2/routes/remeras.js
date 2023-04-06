const express = require("express")
const router = express.Router()
const remerasController = require('../controllers/remerasController')

router.get('/', remerasController.index)


module.exports = router
