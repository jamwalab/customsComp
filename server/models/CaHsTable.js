const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CaHsTable extends Model {}

CommonHS.init(
  {
    hs_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sequence: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dash : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    desctiption: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duty: {
      type: DataTypes.STRING,
    },
    tags_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'caHsTable'
  }
);

module.exports = CaHsTable;