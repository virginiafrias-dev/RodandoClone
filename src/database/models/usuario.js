function usuarioData(sequelize, Datatypes) {
 
  let alias = "usuario";

  let  cols = {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: { 
      type: Datatypes.STRING(200),
      NULL: false 
    },
    apellido: { 
      type: Datatypes.STRING(200),
      NULL: false 
    },
    telefono: {
      type: Datatypes.STRING(20),
      NULL: false
    },
    direccion: {
      type: Datatypes.STRING(200),
      NULL: false
    },
    email: {
      type: Datatypes.STRING(100),
      NULL: false
    },
    clave: {
      type: Datatypes.STRING(50),
      NULL: false
    },
    rol: {
      type: Datatypes.ENUM("admin", "empleado")
    },
    fecha_creacion: {
      type: Datatypes.DATE,
    },
    fecha_eliminacion: {
      type: Datatypes.DATE,
    },
    sucursal_id: {
      type: Datatypes.INTEGER,
      references:{
          model:'sucursal',
          key:'id'
      }
    },
    imagen: {
      type: Datatypes.STRING(50),
    }
  };

  let config = { 
    timestamps: false,
    tableName: 'usuarios' 
  };

  const usuario = sequelize.define(alias, cols, config);
  
  
  usuario.associate = function(models){
    usuario.belongsTo(models.sucursal, {
      as: "sucursal",
      foreignKey: "sucursal_id",
    });
    
    usuario.hasMany(models.rodado, {
      as: "rodado",
      foreignKey: "usuario_id",
    });
    

  }
  
  return usuario;

}

module.exports = usuarioData;
