const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    hp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Fuerza: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Defensa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Velocidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Altura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Peso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
