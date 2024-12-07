'use strict';
const pipe = (...fns) => {
  for (const i of fns) {
    if (typeof i !== 'function') throw 'all elements should be functions';
  }
  return (x) => fns.reduce((acc, curr) => acc = curr(acc), x);
};
module.exports = { pipe };
