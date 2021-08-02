"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = void 0;
function split(separator, str) {
  const innerSplit = (str) => str.split(separator);
  return str ? innerSplit(str) : innerSplit;
}
exports.split = split;
