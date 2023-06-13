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
      let id = req.session.user.id // ponerlo asi en todos lados donde aparezca id
      db.usuarios.findByPk(id, {
        include: [{association:"usuarios_productos"}]
      })
      .then(function(data){
        
        console.log(data)
        res.render('profile',{
          user : data
        });
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
      //falta capturar el id que calculo que es con sessions.
      // para mandar la info de el usuario que se esta logueando y mostrarlo en el Header. 
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