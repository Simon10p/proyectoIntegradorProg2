const data = require('../db/database')

const usersController = {
    login: function(req, res) {
        res.render('login', {
          usuarioLogueado: false
      });
      },
    register: function(req, res) {
        res.render('register', {
          usuarioLogueado: true
      });
      },
    profile: function(req, res) {
        res.render('profile',{
          remeras : data.remeras,
          usuarioLogueado: true
        });
      },
    edit: function(req, res) {
        res.render('profile-edit', {
          usuarioLogueado: true
      });
      },     
}

module.exports = usersController