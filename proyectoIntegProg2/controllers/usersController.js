const data = require('../db/database')

const usersController = {
    login: function(req, res) {
        res.render('login');
      },
    register: function(req, res) {
        res.render('register');
      },
    profile: function(req, res) {
        res.render('profile',{
          remeras : data.remeras
        });
      },
    edit: function(req, res) {
        res.render('profile-edit');
      },     
}

module.exports = usersController