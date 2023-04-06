const express = require("express")
const router = express.Router()

const controlador = {
    index: function(req,res){
        res.render('index')
    }
}

module.exports = controlador