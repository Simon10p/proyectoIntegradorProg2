const express = require("express")
const router = express.Router()
const remerasController = require('../controllers/remerasController')

router.get('/product/:id', remerasController.product)

router.post('/product/:id', remerasController.addComment)
router.post('/users/login', remerasController.addComment)


router.get("/results", remerasController.search)

router.post("/product/:id", remerasController.updateProduct)

router.get("/edit/:id", remerasController.edit)

router.post("/add/load", remerasController.load)


module.exports = router
