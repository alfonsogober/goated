"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = void 0;
const isEqual = require("lodash.isequal");
function equals(a, b) {
  const innerEquals = (b) => {
    return isEqual(a, b);
  };
  return b ? innerEquals(b) : innerEquals;
}
exports.equals = equals;
