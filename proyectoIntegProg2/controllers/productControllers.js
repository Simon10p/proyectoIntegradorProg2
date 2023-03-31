const express = require("express")
const router = express.Router()
const catalogo = require("../db/database")
const lista = catalogo.lista

const controlador ={
    index: function(req,res){
        res.render('index', {lista: lista})
    }
    
}

module.exports = controlador