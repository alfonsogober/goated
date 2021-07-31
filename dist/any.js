"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.any = void 0;
const Bluebird = require("bluebird");
function any(args) {
  const hasPromises = args.reduce((arg, nextArg) => {
    var _a, _b;
    return (_b = !!(
      nextArg instanceof Promise ||
      ((_a = nextArg) === null || _a === void 0 ? void 0 : _a.then)
    )) !== null && _b !== void 0
      ? _b
      : arg;
  }, false);
  if (args.length) {
    if (hasPromises) {
      return Bluebird.any(args);
    } else {
      return args.reduce((prev, curr) => {
        var _a;
        return (_a = !!curr) !== null && _a !== void 0 ? _a : prev;
      }, false);
    }
  } else {
    throw new Error(`goated.any() requires at least one argument.`);
  }
}
exports.any = any;
