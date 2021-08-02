"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = void 0;
function subtract(a, b) {
  const innerSubtract = (b) => a - b;
  return typeof b === "number" ? innerSubtract(b) : innerSubtract;
}
exports.subtract = subtract;
