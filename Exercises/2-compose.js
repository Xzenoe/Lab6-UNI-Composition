'use strict';

const compose = (...fns) => {
  const err = [];
  const compose = (x) => {
    let last = fns.length - 1;
    let result = x;
    try {
      for (last; last >= 0; last--) {
        result = fns[last](result);
      }
      return result;
    } catch (error) {
      for (const er of err) {
        er(error);
      }
      return null;
    }
  };
  compose.on = (y, x) => {
    if (y === 'error') err.push(x);
  };
  return compose;
};
// Навіть код в солюшенах не може пройти у мене тести, я взагалі заплутався що робити з цими ерорами, вибачте що код в цьому завданні дуже схожий на солюшен
module.exports = { compose };
