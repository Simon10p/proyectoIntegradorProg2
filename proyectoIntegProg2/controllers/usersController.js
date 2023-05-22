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
    },
    create: function(req, res){
      let name = req.body.name
      let email = req.body.email
      let password = req.bpdy.password

      let passEncriptada = bcrpt.hashSync(password, 12)
      db.users.create({
        name: name,
        email: email,
        password: passEncriptada
      })
    },
    checkUser: function(req,res){
    },
    update: function(req, res){
      let id = req.params.id
      let {name,email} = req.bodydb.Users.update({
          name: name,
          email: email,

      }, {
          where:{
              id: id
          }
      })
      .then(function(resp){
          res.redirect("/users/profile" + id)
      })
    }

    }

module.exports = usersController