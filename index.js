module.exports = getIn

function getIn (obj, path, dft) {
  for (var i = 0, len = path.length; i < len; ++i) {
    if (obj == null) return dft
    obj = obj[path[i]]
  }

  return obj === undefined ? dft : obj
}
