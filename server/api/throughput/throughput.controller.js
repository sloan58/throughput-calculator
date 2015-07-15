'use strict';

var _ = require('lodash');
var Throughput = require('./throughput.model');

// Get list of throughputs
exports.index = function(req, res) {
  Throughput.find(function (err, throughputs) {
    if(err) { return handleError(res, err); }
    return res.json(200, throughputs);
  });
};

// Get a single throughput
exports.show = function(req, res) {
  Throughput.findById(req.params.id, function (err, throughput) {
    if(err) { return handleError(res, err); }
    if(!throughput) { return res.send(404); }
    return res.json(throughput);
  });
};

// Creates a new throughput in the DB.
exports.create = function(req, res) {
  Throughput.create(req.body, function(err, throughput) {
    if(err) { return handleError(res, err); }
    return res.json(201, throughput);
  });
};

// Updates an existing throughput in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Throughput.findById(req.params.id, function (err, throughput) {
    if (err) { return handleError(res, err); }
    if(!throughput) { return res.send(404); }
    var updated = _.merge(throughput, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, throughput);
    });
  });
};

// Deletes a throughput from the DB.
exports.destroy = function(req, res) {
  Throughput.findById(req.params.id, function (err, throughput) {
    if(err) { return handleError(res, err); }
    if(!throughput) { return res.send(404); }
    throughput.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}