const express = require("express")
const router = express.Router()
const remerasController = require('../controllers/remerasController')

router.get('/product/id', remerasController.product)
router.get("/add", remerasController.add)
router.get("/results", remerasController.search)


module.exports = router
