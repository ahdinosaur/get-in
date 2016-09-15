const assert = require('assert')

module.exports = getIn

function getIn (object, path, dft) {
  assert.equal(typeof object, 'object', 'getIn: expected object as first argument.')
  assert.ok(Array.isArray(path), 'getIn: expected array path as second argument.')

  for (var i = 0, len = path.length; i < len; ++i) {
    if (object == null) return dft
    object = object[path[i]]
  }

  return object === undefined ? dft : object
}
