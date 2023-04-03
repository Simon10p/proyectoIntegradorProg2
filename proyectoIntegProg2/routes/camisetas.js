const express = require("express")
const router = express.Router()
const remerasController = require('../controllers/productControllers')

router.get('/', remerasController.index)
// router.get("/login", remerasController.login)
// router.get("/profile-edit", remerasController.profileEdit)
// router.get("/profile", remerasController.profile)
// router.get("/search-results", remerasController.search)
// router.get("/register", remerasController.register)
// router.get("/product", remerasController.product)
// router.get("/product-add", remerasController.productAdd)
//router.get('/detalle/:id?', remerasController.detalle)

module.exports = router
