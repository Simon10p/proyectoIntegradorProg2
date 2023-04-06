var express = require('express');
var router = express.Router();
const indexControlador = require('../controllers/indexController')

/* GET home page. */
router.get('/home', indexControlador.index)

module.exports = router
