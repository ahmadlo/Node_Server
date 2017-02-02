/* jshint indent: 2 */
var Sequelize = require('sequelize');
var db = require('../connect');



const User = db.cnx().define('utilisateur', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: "utilisateur"
  }
);

module.exports = User
