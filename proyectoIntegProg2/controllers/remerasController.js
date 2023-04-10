const express = require("express")
const { remeras } = require("../db/database")
const router = express.Router()
const data = require("../db/database")
// SEARCH
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
const query = queryStringObj.get("search-form")

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
            usuarioLogueado: true,
            user: data.usuario,
            arrayRemeras : data.remeras,
          //  buscado: query

        })
    }
    
}

module.exports = remerasController