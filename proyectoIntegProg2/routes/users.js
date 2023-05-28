var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/* GET users listing. */
router.get('/login', usersController.login )

router.get('/register', usersController.register)
router.post('/register', usersController.create)
//chequiar esta ruta


router.get('/profile', usersController.profile)
router.post("/profile", usersController.checkUser)

router.get('/edit', usersController.edit)



module.exports = router;
