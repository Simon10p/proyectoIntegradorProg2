const data = require('../db/database')

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
        res.render('profile',{
          remeras : data.remeras,
          usuarioLogueado: true,
          user : data.usuario,
        });
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