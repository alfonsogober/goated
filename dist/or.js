"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.or = void 0;
function or(...args) {
  const innerOr = (b) => !!(args[0] || b);
  return args.length === 2 ? innerOr(args[1]) : innerOr;
}
exports.or = or;
