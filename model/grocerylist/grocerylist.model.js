/* jshint indent: 2 */
var Sequelize = require('sequelize');
var db = require('../connect');



const grocerylist = db.cnx().define('grocerylist', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
   {timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'grocerylist'
  }
  );
module.exports = grocerylist
