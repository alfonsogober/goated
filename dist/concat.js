"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = void 0;
function concat(a, b) {
  const innerConcat = (b) => a.concat(b);
  return b ? innerConcat(b) : innerConcat;
}
exports.concat = concat;
