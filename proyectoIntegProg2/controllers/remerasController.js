const express = require("express")
const db = require("../database/models/Producto")

const remerasController ={
    product: function(req,res){
        db.products.findAll({
            include: [{association:"productos_usuarios"}]
        }),
        db.Product.findAll()
        .then(function(result){
            
        })
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