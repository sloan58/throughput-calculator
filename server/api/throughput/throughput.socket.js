/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Throughput = require('./throughput.model');

exports.register = function(socket) {
  Throughput.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Throughput.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('throughput:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('throughput:remove', doc);
}