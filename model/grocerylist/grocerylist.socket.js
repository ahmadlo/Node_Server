/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Grocerylist = require('./grocerylist.model');

exports.register = function(socket) {
  Grocerylist.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Grocerylist.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('grocerylist:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('grocerylist:remove', doc);
}