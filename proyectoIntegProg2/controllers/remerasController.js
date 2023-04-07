const express = require("express")
const router = express.Router()
const catalogo = require("../db/database")
const lista = catalogo.lista

const remerasController ={
    product: function(req,res){
        res.render("product", {
            usuarioLogueado: true
        })
    },
    add: function(req,res){
        
        res.render("product-add", {
            usuarioLogueado: true
        })
    },
    search: function(req,res){
        res.render("search-results", {
            usuarioLogueado: true
        })
    }
    
}

module.exports = remerasController