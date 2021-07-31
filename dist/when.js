"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.when = void 0;
function when(pred, fn) {
  if (typeof pred === "function" && typeof fn === "function") {
    return (input) => {
      const predResult = pred(input);
      if (predResult) {
        return fn(input);
      } else {
        return input;
      }
    };
  } else {
    throw new Error(
      `goated.when() only accepts functions as arguments. Received ${pred}, ${fn}`
    );
  }
}
exports.when = when;
