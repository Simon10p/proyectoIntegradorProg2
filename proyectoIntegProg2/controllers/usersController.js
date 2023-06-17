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
      let perfil_logueado
      if(req.params.id){
        idPerfil = req.params.id
        perfil_logueado = false
      } else {
        idPerfil = req.session.user.id
        perfil_logueado = true

      }
      db.usuarios.findByPk(idPerfil, {
        order: [["usuarios_productos",'createdAt', 'DESC']],
        include: [{association:"usuarios_productos"}, {association:"usuarios_comentarios"}]
      })
      .then(function(data){
        res.render('profile',{
            usuario : data,
            perfil_logueado
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
          usuario : data
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
      if ((email == "") || (password.length < 3)){
        let errors = {}
        if (password <= 3){
            errors.message= "debes ingresar una contraseña con al menos 4 caracteres"
        }else if(email == ""){
            errors.message= "El mail ingresado no es valido"
        } 
        res.locals.errors = errors
        res.render('register')
      }
      else{
        db.usuarios.findOne({
          where:{
            email:email
          }
        })
        .then(function(data){
          if(data){
            let errors = {}
            errors.message = "Ya existe un usuario registrado con ese mail"
            res.locals.errors = errors
            res.render("register")
          }
          else{
            let passEncriptada = bcrypt.hashSync(password, 12)
            db.usuarios.create({
              username,
              email,
              password: passEncriptada,
              DNI,
              cumpleaños,
              foto_perfil
            })
            .then(function(data){
              res.redirect("/users/login")
            })
            .catch(function(error){
              console.log(error)
            })
          }
        })
        .catch(function(error){
          console.log(error)
        })
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
          errors.message = ("La contraseña ingresada es incorrecta, vuelva a intentar")
          res.locals.errors = errors
          return res.render("login")
        }
        }
        else{
          let errors = {}
          errors.message = ("El usuario ingresado no existe")
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
      let {username, email, DNI, cumpleaños, foto_perfil, password} = req.body

      db.usuarios.findByPk(id)
      .then(function(usuario){
        let checkPassword = bcrypt.compareSync(password, usuario.password)
        if(checkPassword){
          req.session.user = {
            id: id,
            username: username,
            email: email
          }
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
          res.redirect(`/users/profile/${id}`)
      })
      }
      else{
        let errors = {}
        errors.message = "La contraseña ingresada es incorrecta, vuelva a intentar"
        res.locals.errors = errors
      }
      })
      .catch(function(error){
        console.log(error)
      })
    }
}
module.exports = usersController