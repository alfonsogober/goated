"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = void 0;
function multiply(a, b) {
    const innerMultiply = (b) => a * b;
    return typeof b === "number" ? innerMultiply(b) : innerMultiply;
}
exports.multiply = multiply;
