const db = require("../database/models/index")
const op = db.Sequelize.op
let bcrypt = require("bcryptjs")


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
      let id = req.params.id
      db.usuarios.findByPK(id)
        // raw:true,
        // nested: true,
        // include: [{association:"usuarios_productos"}]
        //no c si va esto adentro del fin by pk
      .then(function(data){
        res.render('profile',{
          // remeras : data.remeras,
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
      let id = req.params.id
      db.usuarios.findByPK(id)
      .then(function(data){
        res.render('profile-edit', {
          usuarioLogueado: true,
          user : data
      });
      })
      .catch(function(error){
        console.log(error)
      })
    },

    header: function(req, res){
      res.send("header",{
        user : data.usuario
      })
    },
    create: function(req, res){
      let username = req.body.username
      let email = req.body.email
      let password = req.body.password
      let DNI = req.body.DNI
      let cumpleaños = req.body.cumpleaños
      let foto_perfil = req.body.foto_perfil

      let passEncriptada = bcrypt.hashSync(password, 12)
      db.users.create({
        username,
        email,
        password: passEncriptada,
        DNI,
        cumpleaños,
        foto_perfil
      })
      .then(function(response){
        id = response.id
        //aca entonces lo mando por el res redirect???
        res.redirect("/users/profile" + id)
      })
      .catch(function(error){
        console.log(error)
      })
    },

    checkUser: function(req,res){
      let {email, password} = req.body

      db.usuarios.findOne({
        where:{
          email
        },
        raw:true

      })
      .then(function(usuario){
        let checkPassword = bcrypt.compareSync(password, usuario.password)
        if (checkPassword){
          res.redirect("/users/profile" + usuario.id)
        }
      })
      .catch(function(error){
        console.log(error)
      })

    },
    updateProfile: function(req, res){
      let id = req.params.id
      let {username, email, DNI, cumpleaños, foto_perfil} = req.body
      db.usuarios.update({
          username,
          email,
          foto_perfil,
          DNI,
          cumpleaños
      },
      {
          where:{
              id
          }
      })
      .then(function(response){
          res.redirect("/users/profile" + id)
      })
      .catch(function(error){
        console.log(error)
      })
    }

    }

module.exports = usersController