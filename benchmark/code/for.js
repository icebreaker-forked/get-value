
const isObject = require('isobject');

module.exports = function getValue(obj, prop) {
  if (obj == null) { return {}; }
  if (typeof prop !== 'string') {
    return obj;
  }

  const path = prop.split('.');
  const last = path.pop();
  const len = path.length;

  for (let i = 0; i < len; i++) {
    obj = obj[path[i]];
    if (!isObject(obj)) {
      return obj;
    }
  }

  return obj[last];
};
