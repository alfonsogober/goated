"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
function pipe(...args) {
  if (typeof args[0] === "function") {
    return (...innerArgs) =>
      args.reduce(
        (prev, curr, index) =>
          index === 0 ? curr.apply(curr, prev) : curr(prev),
        innerArgs
      );
  } else {
    throw new Error(`goated.pipe() requires at least one argument.`);
  }
}
exports.pipe = pipe;
