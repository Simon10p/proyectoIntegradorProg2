const express = require("express")
const router = express.Router()
const remerasController = require('../controllers/remerasController')

router.get('/product/:id', remerasController.product)
router.get("/results", remerasController.search)
router.get("/add", remerasController.add)
router.post("/add/load", remerasController.load)


module.exports = router
