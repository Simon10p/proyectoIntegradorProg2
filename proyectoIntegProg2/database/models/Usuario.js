module.exports = function (sequelize,DataTypes){
    let alias= "users"
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
        timestamps: true
    }
    const users = sequelize.define(alias,columnas,config)
    users.associate = function(models){
        products.hasMany(models.comentarios, {
            as:"usuarios_comentarios",
            foreignKey: usuario_id,

        })
    }

    return users
}