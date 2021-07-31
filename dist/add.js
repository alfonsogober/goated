"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(a, b) {
  const innerAdd = (b) => a + b;
  return typeof b === "number" ? innerAdd(b) : innerAdd;
}
exports.add = add;
