// const express    = require('express');
// const mongoose   = require('mongoose');
// const helmet     = require('helmet');
// const bodyParser = require('body-parser');
// const morgan     = require('morgan');
// const bluebird   = require('bluebird');

// const config = require('./config');
// const routes = require('./routes');

// const app  = express();

// mongoose.Promise = bluebird;
// mongoose.connect(config.mongo.url);

// app.use(helmet());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(morgan('tiny'));
// app.use('/', routes);

// app.listen(config.server.port, () => {
//   console.log(`Magic happens on port ${config.server.port}`);
// });

// module.exports = app;


// server 
/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var io = require('socket.io')();
var sequelize = require('socket.io-sequelize');
// Setup server
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});
//require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
