var User = require('./user.model');

//liste des userx
exports.index = function(req, res) {
  User.findAll().then(function (user) {
    return res.json(user);


  });
};

//get user by id
exports.show = function(req, res) {
  User.findById(req.params.id).then(function (user) {
    return res.json(user);


  });
};

//Creates a new user in the DB.
exports.create = function(req, res) {
  User
    .create(req.body)
    .then(function (user) {
      return res.status(201).json(user);
    })
    .catch(function (err){
      if(err) { return handleError(res, err); }
    });
};

// Updates an existing user in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  User
    .findById(req.params.id)
    .then(function (user) {
      if(!user) { return res.status(404).send('Not Found'); }
      var updated = _.merge(user, req.body);
      updated.save(function (err) {
        if (err) { return handleError(res, err); }
        return res.status(200).json(user);
      });
    })
    .catch(function (err){
      if (err) { return handleError(res, err); }
    });
};

// Deletes a user from the DB.
exports.destroy = function(req, res) {
  User
    .findById(req.params.id)
    .then(function (user) {
      if(!user) { return res.status(404).send('Not Found'); }
      user.destroy(function(err) {
        if(err) { return handleError(res, err); }
        return res.status(204).send('No Content');
      });
    })
    .catch(function (err){
      if(err) { return handleError(res, err); }
    });
};

function handleError(res, err) {
  return res.status(500).send(err);
}




