var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/* GET users listing. */
router.get('/login', usersController.login )
router.post("/login", usersController.checkUser)



router.get('/register', usersController.register)
router.post('/register', usersController.create)
//chequiar esta ruta


router.get('/profile/:id?', usersController.profile)


router.get('/edit', usersController.edit)
router.post("/edit", usersController.updateProfile)


module.exports = router;
