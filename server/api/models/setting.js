'use strict'
module.exports = (sequelize, DataTypes) => {
  const setting = sequelize.define('setting', {
    key: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      index: true
    },
    value: DataTypes.JSON
  }, {})

  return setting
}
