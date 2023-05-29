const db = require("../database/models/index")
const op = db.Sequelize.op


const controlador = {
    index: function(req,res){
        db.productos.findAll({   
            raw: true,
            nest: true,
            include: [{ association: "productos_comentarios"}]

        })
        .then(function(data){
            console.log(data);
            
            res.render('index', {
                remeras: data,
                usuarioLogueado: false

            })
        })        
        .catch(function(err){
            console.log(err)
        })
}
}
module.exports = controlador