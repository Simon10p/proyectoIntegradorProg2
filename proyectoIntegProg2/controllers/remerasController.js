const express = require("express")
const router = express.Router()
const data = require("../db/database")


const remerasController ={
    product: function(req,res){
        res.render("product", {
            usuarioLogueado: true,
            user: data.usuario,
            comentarios : data.comentarios
        })
    },
    add: function(req,res){
        
        res.render("product-add", {
            usuarioLogueado: true,
            user : data.usuario
        })
    },
    search: function(req,res){
        res.render("search-results", {
            usuarioLogueado: true
        })
    }
    
}

module.exports = remerasController