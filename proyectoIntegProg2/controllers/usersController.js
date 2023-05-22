const db = require("../database/models/index")
const op = db.Sequelize.op


const usersController = {
    login: function(req, res) {
        res.render('login', {
          usuarioLogueado: false
      });
      },
    register: function(req, res) {
        res.render('register', {
          usuarioLogueado: false
      });
      },
    profile: function(req, res) {
      db.usuarios.findAll({
        raw:true,
        nested: true,
        include: [{association:"usuarios_productos"}]
      })
      .then(function(data){
        res.render('profile',{
          remeras : data.remeras,
          //como hago para ademas mandarle la info de las remeras
          usuarioLogueado: true,
          user : data
        });
        })
        .catch(function(error){
          console.log(error)
        })
      },
    edit: function(req, res) {
        res.render('profile-edit', {
          usuarioLogueado: true,
          user : data.usuario
      });
    },
    header: function(req, res){
      res.send("header",{
        user : data.usuario
      })
    }      
    }

module.exports = usersController