(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.N = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  module.exports = N;
  var ISNUMBER = require('formula-isnumber');
  var ISERROR = require('formula-iserror');
  var serial = require('formula-serial');

  function N(value) {
    if (ISNUMBER(value)) {
      return value;
    }
    if (value instanceof Date) {
      return serial(value);
    }
    if (value === true) {
      return 1;
    }
    if (value === false) {
      return 0;
    }
    if (ISERROR(value)) {
      return value;
    }
    return 0;
  }
});
