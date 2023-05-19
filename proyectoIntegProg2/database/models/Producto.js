const Usuario = require("./Usuario")

module.exports = function (sequelize,DataTypes){
    let alias= "Products"
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
        foto_perfil:{
            type:DataTypes.STRING
        },
        cumpleaños:{
            type:DataTypes.DATE,
            allowNull: true
        },
        DNI:{
        type:DataTypes.INTEGER,
        allowNull: true,
        unique:true
        }
    }
    let config= {
        tableName:"¨Productos",
        timestamps: true
    }
    const Products = sequelize.define(alias,columnas,config)

    Products.associate = function(models){
        Products.belongsTo(models.users,{
            as: "productos_usuarios",
            foreignKey: usuario_id,
        } 
            )
    }

    return Products
}