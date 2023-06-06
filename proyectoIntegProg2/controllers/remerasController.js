const db = require("../database/models/index")
const Op = db.Sequelize.Op

const remerasController ={
    product: function(req,res){
        let id = req.session.user.id
        db.productos.findByPk(id, {
            raw: true,
            nest: true,
            include: [{association:"productos_usuarios"},{association: "productos_comentarios"}],
        })
        .then(function(data){
            res.send(data)
            res.render('product',{
                producto: data
            })
        })
        .catch(function(error){
            console.log(error)
        })

    },

    add: function(req,res){
        if(req.session.user != undefined){ //add esta solo dispobile para la gente que este logueada (hacer los mismo para las otras funciones que reaquieran estar logueado)
        res.render("product-add", {
            user : data.usuario
        })
        }else{
            res.redirect('/users/login')
        }

    },
    load:
    function(req, res){
        db.productos.create({
            img_url: req.body.img_url,
            nombre_producto: req.body.nombre_producto,
            descripcion: req.body.descripcion,
            usuario_id: req.body.usuario_id
        })
        .then(function(data){
            res.redirect("/users/profile")
        })
        .catch(function(error){
            console.log(error)
        })
    },
    search: function(req,res){
        let userSearch = req.query.userSearch
        db.productos.findAll({
            raw:true,
            where:{
                nombre_producto:{
                     [Op.like] : `%${userSearch}%`
                }
            }
        })
        .then(function(data){
            let resultadosBusqueda 
            if (data.length > 0 ){
                resultadosBusqueda = true
            }
            else{
              resultadosBusqueda = false
            }
            res.render("search-results", {
                remeras: data,
                userSearch,
                resultadosBusqueda
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

module.exports = remerasController

let datos ={
    "id":1,
    "usuario_id":null,
    "nombre_producto":"Argentina 1986",
    "descripcion":"Camiseta vintage de fútbol de Argentina, ganador de la Copa del Mundo 1986 en México, Argentina-Alemania 3-2","img_url":"/images/argentina-1986-1-1.jpeg","createdAt":"2023-05-29T18:14:21.000Z","updatedAt":"2023-05-29T18:14:21.000Z",
    "productos_usuarios":
    {"id":null,"username":null,"email":null,"password":null,"foto_perfil":null,"DNI":null,"cumpleaños":null},"productos_comentarios":{"id":1,"usuario_id":1,"comentario":"QUIERO SER CAMPEON MUNDIAAAAAL","createdAt":"2023-05-29T18:14:21.000Z","updatedAt":"2023-05-29T18:14:21.000Z","producto_id":1}}