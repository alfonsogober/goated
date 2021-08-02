"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = void 0;
function and(...args) {
  const innerAnd = (b) => !!(args[0] && b);
  return args.length === 2 ? innerAnd(args[1]) : innerAnd;
}
exports.and = and;
