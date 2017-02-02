// const Router = require('express').Router;
// const router = new Router();

// const user  = require('./model/user/user-router');
// const pet  = require('./model/pet/pet-router');


// router.route('/').get((req, res) => {
//   res.json({ message: 'Welcome to sgbf API!' });
// });

// router.use('/user', user);
// router.use('/pet', pet);




// module.exports = router;


/// route
/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  //app.use('/api/lecons', require('./api/lecon'));
  app.use('/api/user',require('./model/user'));
  //app.use('/api/pet',require('./model/pet'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};

