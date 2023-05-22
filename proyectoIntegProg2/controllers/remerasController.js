const db = require("../database/models/index")
const op = db.Sequelize.op

const remerasController ={
    product: function(req,res){
        let id = req.params.id
        db.productos.findByPk(id, {
            raw: true,
            nested: true,
            include: [{association:"productos_usuarios"}]
        })
        .then(function(data){
            res.render('product',{
                usuarioLogueado: false,
                producto: data
            })
        })
        .catch(function(error){
            console.log(error)
        })

        db.productos.findAll({
            raw:true
        })
        .then(function(data){
        })
        .catch(function(error){
            console.log(error)
        })
        db.usuarios.findAll({
            raw: true
        })
        .then(function(data){
            console.log(data)
        })
        db.comentarios.findAll({
            raw:true
        })
        .then(function(data){
            console.log(data)
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
        db.productos.findAll({
            raw:true
        })
        .then(function(data){
            res.render("search-results", {
                remeras: data,
                usuarioLogueado: true,
                user: data.usuario
            })
        })
    }
}

module.exports = remerasController