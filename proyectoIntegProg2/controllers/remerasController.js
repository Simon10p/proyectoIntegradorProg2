const express = require("express")
const { remeras } = require("../db/database")
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
            remeras: data.remeras,
            usuarioLogueado: true,
            user: data.usuario
        })
    }
    
}

module.exports = remerasController