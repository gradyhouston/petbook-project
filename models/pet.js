module.exports = (sequelize, DataTypes) => {

  const Pets = sequelize.define('Pets', {

    pets_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },

    pets_breed: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    pets_age: {
      type: DataTypes.INTEGER(25),
      allowNull: false,
    },
    pets_temperament: {
      type: DataTypes.STRING(25),
      allowNull: false,
    }

  });

  Pets.associate = function(models) {
    Pets.belongsTo(models.User)
  };
  console.log('pets model has been called');

  return Pets;

}