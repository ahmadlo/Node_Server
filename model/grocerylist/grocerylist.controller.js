'use strict';

var _ = require('lodash');
var Grocerylist = require('./grocerylist.model');



// Get list of grocerylists
exports.index = function(req, res) {
  Grocerylist
    .findAll()
    .then(function (grocerylists) {
      return res.status(200).json(grocerylists);
    })
    .catch(function (err){
      if(err) { return handleError(res, err); }
    });
};

// Get a single grocerylist
exports.show = function(req, res) {
  Grocerylist
    .findById(req.params.id)
    .then(function (grocerylist) {
      if(!grocerylist) { return res.status(404).send('Not Found'); }
      return res.json(grocerylist);
    })
    .catch(function (err){
      if(err) { return handleError(res, err); }
    });
};

// Creates a new grocerylist in the DB.
exports.create = function(req, res) {
  Grocerylist
    .create(req.body)
    .then(function (grocerylist) {
      return res.status(201).json(grocerylist);
    })
    .catch(function (err){
      if(err) { return handleError(res, err); }
    });
};

// Updates an existing grocerylist in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Grocerylist
    .findById(req.params.id)
    .then(function (grocerylist) {
      if(!grocerylist) { return res.status(404).send('Not Found'); }
      var updated = _.merge(grocerylist, req.body);
      updated.save(function (err) {
        if (err) { return handleError(res, err); }
        return res.status(200).json(grocerylist);
      });
    })
    .catch(function (err){
      if (err) { return handleError(res, err); }
    });
};

// Deletes a grocerylist from the DB.
exports.destroy = function(req, res) {
  Grocerylist
    .findById(req.params.id)
    .then(function (grocerylist) {
      if(!grocerylist) { return res.status(404).send('Not Found'); }
      grocerylist.destroy(function(err) {
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


// controller 
