// const data??? falta
const db = require("../database/models/index")
const op = db.Sequelize.Op


const controlador = {
    index: function(req,res){
        db.productos.findAll({   
            nest: true,
            include: [{ association: "productos_comentarios"}, {association:"productos_usuarios"}],

            

        })
        .then(function(data){
            console.log(data);
            res.render('index', {
                remeras: data
            })
        })        
        .catch(function(err){
            console.log(err)
        })
},
    logout: function( req, res){
        req.session.user = undefined
        res.redirect('/')
    }
}
module.exports = controlador