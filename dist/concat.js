"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = void 0;
function concat(a, ...rest) {
  const innerConcat = (...args) => a.concat.apply(a, args);
  return a instanceof Array && rest[0]
    ? innerConcat.apply(innerConcat, rest)
    : innerConcat;
}
exports.concat = concat;
