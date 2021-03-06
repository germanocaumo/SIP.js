"use strict";
var extend = require('util')._extend;

extend(exports, require('./environment_browser'));

extend(exports, {
  TransportUDP: require('./TransportUDP'),
  TransportTCP: require('./TransportTCP'),
  WebSocket: require('ws'),
  Socket: require('net').Socket,
  dgram: require('dgram'),
  Promise: exports.Promise || require('promiscuous'),
  console: require('console'),
  timers: require('timers')
});
