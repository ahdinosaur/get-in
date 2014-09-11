var defaultGet = function get (object, key) {
  return object && object[key];
}

var getIn = module.exports = function getIn (object, path) {
  if (!(path instanceof Array) || path.length === 0) {
    return;
  }

  path = path.slice();

  var key = path.shift();

  if (!object || typeof object !== "object") {
    return object;
  }

  var get;
  if (object.get) {
    get = object.get.bind(object);
  } else {
    get = defaultGet.bind(null, object);
  }

  if (path.length === 0) {
    return get(key);
  }

  if (path.length) {
    return getIn(get(key), path);
  }
}
