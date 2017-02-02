var User = require('./user.model');

//liste des userx
exports.index = function(req, res) {
  User.findAll().then(function (cycles) {
    return res.json(cycles);


  });
};

//get user by id
exports.show = function(req, res) {
  User.findById(req.params.id).then(function (cycles) {
    return res.json(cycles);


  });
};




