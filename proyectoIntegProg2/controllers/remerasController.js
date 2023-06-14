const db = require("../database/models/index")
const Op = db.Sequelize.Op

const remerasController ={
    product: function(req,res){
        //let id = req.session.user.id
        let id = req.params.id
        db.productos.findByPk(id, {
      
            nest: true,
            include: [{association:"productos_usuarios"},{association: "productos_comentarios", include: {association: "comentarios_usuarios"}}],
        })
        .then(function(data){
            res.render('product',{
                producto: data
            })
        })
        .catch(function(error){
            console.log(error)
        })

    },

    edit: function(req,res){
        if(req.session.user != undefined){ //add esta solo dispobile para la gente que este logueada (hacer los mismo para las otras funciones que reaquieran estar logueado)
            let id = req.params.id 
            db.productos.findByPk(id, {
                nest: true,
                include:{association:"productos_usuarios"}
            })
            .then(function(data){ 
                res.render("product-edit", {
                    producto : data  
            })

        })
        }else{
            res.redirect('/users/login')
        }
    },
    updateProduct: function(req, res){
        let id = req.params.id
        let {img_url, nombre_producto, descripcion, fechaCarga} = req.body
         db.productos.update({
             img_url,
             nombre_producto,
             descripcion,
             fechaCarga
         },
         {
            where:{id}
        })
        .then(function(res){
            res.redirect(`/remeras/product/${id}`)
        })
        .catch(function(error){
            console.log(error)
        })
    },
    load:
    function(req, res){
        db.productos.create({
            img_url: req.body.img_url,
            nombre_producto: req.body.nombre_producto,
            descripcion: req.body.descripcion,
            usuario_id: req.session.user.id
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
                [Op.or]: [
                    { nombre_producto:{ [Op.like] : `%${userSearch}%`}},
                    { descripcion:{ [Op.like] : `%${userSearch}%`}}
                ]
                
                
            },
            order: [
                ['createdAt', 'DESC']
            ],
            include:  {association:"productos_usuarios"}


                
        })
        .then(function(data){
            res.send(data)
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
    },
    addComment: function(req,res){
    
        if(req.session.user){
        db.comentarios.create({
            producto_id: req.params.id,
            usuario_id: req.session.user.id,
            comentario: req.body.comentario
        })
            return res.redirect(`/remeras/product/${req.params.id}`)
          }
        else{
            res.redirect('/users/login')
        }
       
    }
}

module.exports = remerasController

