'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThroughputSchema = new Schema({
  linkId: String,
  winSz_KB: Number,
  netLat_ms: Number,
  winSz_B: Number,
  winSz_b: Number,
  netLat: Number,
  throughput_bps: Number,
  throughput_Mbps: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  active: Boolean
});

module.exports = mongoose.model('Throughput', ThroughputSchema);