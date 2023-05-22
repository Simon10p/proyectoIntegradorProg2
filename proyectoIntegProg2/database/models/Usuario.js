module.exports = function (sequelize,DataTypes){
    let alias= "usuarios"
    let columnas= {
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unsigned: true
        },
        username:{
            type:DataTypes.STRING,
            allowNull: true
        },
        email: {
            type:DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        password:{
            allowNull: true,
            type:DataTypes.STRING
        },
        foto_perfil:{
            type:DataTypes.STRING,
        },
        DNI:{
        type:DataTypes.INTEGER,
        allowNull: true,
        unique:true
        }
    }
    let config= {
        tableName:"Usuarios",
        timestamps: false
    }
    const Users = sequelize.define(alias,columnas,config)

    Users.associate = function(models){
        Users.hasMany(models.comentarios, {
            as:"usuarios_comentarios",
            foreignKey: usuario_id,
        }),
        User.hasMany(models.productos,{
            as:"usuarios_productos"
        })
    }

    return Users
}