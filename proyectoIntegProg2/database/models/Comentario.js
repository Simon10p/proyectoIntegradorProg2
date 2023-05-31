module.exports = function (sequelize,DataTypes){
    let alias= "comentarios"
    let columnas= {
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unsigned: true
        },
        producto_id:{
            type:DataTypes.INTEGER,
            allowNull: true,
            unsigned: true
        },
        usuario_id:{
            type:DataTypes.INTEGER,
            allowNull: true,
            unsigned: true
        },
        comentario:{
            type:DataTypes.STRING,
            allowNull:true
        },
    }
    let config= {
        tableName:"comentarios",
        timestamps: true
    }
    const Comentarios = sequelize.define(alias,columnas,config)

    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.usuarios, {
            as: "usuarios_comentarios",
            foreignKey: "usuario_id",
            timestamps: false,
        })
        Comentarios.belongsTo(models.productos, {
            as: "productos_comentarios",
            foreignKey: "producto_id",
            timestamps: false,
        })
    }
    return Comentarios
}