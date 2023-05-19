const data = require('../db/database')
const db = require("../database/models/index")


const controlador = {
    index: function(req,res){
        res.render('index', {
            remeras: data.remeras,
            usuarioLogueado: false
        })
        db.products.findAll()
        .then(function(data){
            console.log(data)
        })
        .catch(function(err){
            console.log(err)
        })
}
}
module.exports = controlador