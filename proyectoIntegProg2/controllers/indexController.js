const data = require('../db/database')
const db = require("../database/models/index")
const op = db.Sequelize.op


const controlador = {
    index: function(req,res){
        db.products.findAll({
            where:{
                id:{
                    [op]: 1
                },
                nombre_producto:{
                    [op]: 1
                },
            },   
            order:[
                ['nombre_producto', 'ASC']
            ],
            raw: true 
        })
        .then(function(data){
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