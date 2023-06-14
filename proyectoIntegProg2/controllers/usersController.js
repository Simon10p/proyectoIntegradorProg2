const db = require("../database/models/index")
const op = db.Sequelize.Op
let bcrypt = require("bcryptjs")


const usersController = {
    login: function(req, res) {
        // if (req.session.user != undefined){
        //   res.redirect('/')
        // } else {
          res.render ('login')
        // }

        res.render('login');
      },
    register: function(req, res) {
        res.render('register');
      },
    profile: function(req, res) {
      let idPerfil
      if(req.params.id){
        idPerfil = req.params.id
      } else {
        idPerfil = req.session.user.id
      }
      console.log(idPerfil)
      console.log('Este es el IdPerfil')
      //let idLogueado = req.session.user.id
      db.usuarios.findByPk(idPerfil, {
        order: [["usuarios_productos",'createdAt', 'DESC']],
      // los productos que traemos con usuarios_productos tienen que tener el orden DESC
        include: [{association:"usuarios_productos"}]
        
      })
      .then(function(data){
        let perfilUsuario
        if(req.ression.user){
          if(idPerfil === req.session.user.id){
              perfilUsuario = true
            } else{
              perfilUsuario = false
            }
          }else{
              perfilUsuario = false
            }
        res.render('profile',{
            user : data,
            perfilUsuario
        })
        })
        .catch(function(error){
          console.log(error)
        })
      },
    edit: function(req, res) {
      let id = req.session.user.id
      db.usuarios.findByPk(id)
      .then(function(data){
        res.render('profile-edit', {
          user : data
      });
      })
      .catch(function(error){
        console.log(error)
      })
    },

    header: function(req, res){
      let id = req.session.user.id
      db.usuarios.findByPK(id)
      .then(function(data){
        res.send("header",{
          user: data
        })
      })
    },
    create: function(req, res){
      let username = req.body.username
      let email = req.body.email
      let password = req.body.password
      let DNI = req.body.DNI
      let cumpleaños = req.body.cumpleaños
      let foto_perfil = req.body.foto_perfil
      if ((email.includes('@')) && (email.includes('.')) && (password.length > 6))
      {
        let passEncriptada = bcrypt.hashSync(password, 12)
        db.usuarios.create({
          username,
          email,
          password: passEncriptada,
          DNI,
          cumpleaños,
          foto_perfil
        })
        .then(function(response){
          //aca entonces lo mando por el res redirect???
          res.redirect("/users/login") // hay que borrar todo los "+" y los que va despues?
        })
        .catch(function(error){
          console.log(error)
        })
      } else{
        let errors = {}
        errors.message = "Los datos de registro presentan erorrers"
        res.locals.errors = errors
        res.render('register')
      }
    },

    checkUser: function(req,res){
      let {email, password, recordarme} = req.body

      db.usuarios.findOne({
        where:{
          email
        },

      })
      .then(function(usuario){
        if(usuario != null){
        let checkPassword = bcrypt.compareSync(password, usuario.password)
        if (checkPassword){
          req.session.user = {
            id: usuario.id,
            username: usuario.username,
            email: usuario.email,
          }
          if(recordarme === 'on'){
            res.cookie ('recordarme', 
              {
                id: usuario.id,
                username: usuario.username,
                email: usuario.email,

              },
              {
                maxAge: 1000 * 15
              }

            )
          }
          res.redirect("/")
          
        }
        else{
        let errors = {}
        errors.message = "La contraseña ingresada es incorrecta, vuelva a intentar"
        res.locals.errors = errors
        }
        }
        else{
        let errors = {}
        errors.message = "El usuario ingresado no existe"
        res.locals.errors = errors
        res.render('register')
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
          where:{id}
      })
      .then(function(response){
          response.redirect("/users/profile" + id)
      })
      .catch(function(error){
        console.log(error)
      })
    }

    }

module.exports = usersController