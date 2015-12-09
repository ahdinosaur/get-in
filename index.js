var defaultGet = function get (object, key, def) {
  if (key in object) {
    return object[key];
  } else {
    return def;
  }
}

var getIn = module.exports = function getIn (object, path, def) {
  if (!Array.isArray(path)) {
    return;
  }

  if (path.length === 0) {
    return object;
  }

  // already established that path is >0, thus empty object is unexpected.
  if (!object) {
    return def;
  }

  path = path.slice();

  var key = path.shift();

  var get;
  if (object.get) {
    get = object.get.bind(object);
  } else {
    get = defaultGet.bind(null, object);
  }

  if (path.length === 0) {
    return get(key, def);
  }

  if (path.length) {
    return getIn(get(key, def), path);
  }
}
