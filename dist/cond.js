"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cond = void 0;
function cond(pairs, ...rest) {
  const innerCond = (...rest) => {
    for (let i = 0; i < pairs.length; i++) {
      if (pairs[i][0].apply(pairs[i][0], rest))
        return pairs[i][1].apply(pairs[i][1], rest);
    }
    return undefined;
  };
  return innerCond;
}
exports.cond = cond;
