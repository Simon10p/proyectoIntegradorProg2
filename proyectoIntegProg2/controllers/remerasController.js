const db = require("../database/models/index")
const op = db.Sequelize.op

const remerasController ={
    product: function(req,res){
        let id = req.params.id
        db.productos.findByPk(id, {
            raw: true,
            nest: true,
            include: [{association:"productos_usuarios"}],
            include: [{association: "productos_comentarios"}]
        })
        .then(function(data){
            console.log(data);
            res.render('product',{
                usuarioLogueado: false,
                producto: data
            })
        })
        .catch(function(error){
            console.log(error)
        })

    },

    add: function(req,res){
        res.render("product-add", {
            usuarioLogueado: true,
            user : data.usuario
        })
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
                     [op.like] : `%${userSearch}%`
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
                usuarioLogueado: true,
                userSearch: userSearch,
                resultadosBusqueda
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

module.exports = remerasController