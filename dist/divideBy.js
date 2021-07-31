"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divideBy = void 0;
function divideBy(a, b) {
    if (a !== 0) {
        const innerDivideBy = (b) => b / a;
        return typeof b === "number" ? innerDivideBy(b) : innerDivideBy;
    }
    else
        throw new Error("goated.divideBy() cannot divide by zero");
}
exports.divideBy = divideBy;
