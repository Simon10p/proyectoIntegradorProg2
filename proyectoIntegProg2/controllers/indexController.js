const express = require("express")
const router = express.Router()
const data = require('../db/database')

const controlador = {
    index: function(req,res){
        res.render('index', {
            remeras: data.remeras,
            usuarioLogueado: false

        })

    }
}

module.exports = controlador