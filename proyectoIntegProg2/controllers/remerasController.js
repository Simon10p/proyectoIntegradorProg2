const express = require("express")
const router = express.Router()
const catalogo = require("../db/database")
const lista = catalogo.lista

const remerasController ={
    product: function(req,res){
        res.render("product")
    },
    add: function(req,res){
        res.render("product-add")
    },
    search: function(req,res){
        res.render("search-results")
    }
    
}

module.exports = remerasController