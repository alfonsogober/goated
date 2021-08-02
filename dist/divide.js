"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = void 0;
function divide(a, b) {
  const innerDivide = (b) =>
    b !== 0
      ? a / b
      : (() => {
          throw new Error("goated.divide() cannot divide by zero");
        })();
  return typeof b === "number" && b !== 0 ? innerDivide(b) : innerDivide;
}
exports.divide = divide;
