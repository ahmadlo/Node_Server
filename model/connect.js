var Sequelize=require('sequelize')
var config = require('../config/environment');

var sqlUrl = config.mysql.dialect+ '://' + config.mysql.username + ':' + config.mysql.password;
// add to path @host:@port
sqlUrl += '@' + config.mysql.host + ':' + config.mysql.port;
// add to path /@database
sqlUrl += '/' + config.mysql.database;

console.log(sqlUrl);

var db;
exports.cnx = function () {
  return db = new Sequelize(sqlUrl);
}
this.cnx()
  .authenticate()
  .then(function(payload) {
    console.log('Connection to s2i9men5new_ms has been established successfully.',payload);
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });