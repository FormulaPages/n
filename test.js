var n = require('./N');
var assert = require('assert');
var error = require('formula-errors');

describe('n', function() {
  it('should convert value to number', function() {
    assert( n(1) === 1, 'Should still be 1');
    assert( n(100.5) === 100.5, 'Should still be 100.5');
    assert( n(true) === 1, 'True should be 1');
    assert( n(false) === 0, 'False should be 0');
    assert( n(error.value) === error.value, 'Error should pass through call');
    assert( n('invalid') === 0, 'Anything else should be 0');
  });
})
