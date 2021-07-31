"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = void 0;
const Bluebird = require("bluebird");
function all(args) {
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
      return Bluebird.all(args);
    } else {
      return args.reduce((prev, curr) => !!(curr && prev), true);
    }
  } else {
    throw new Error(`goated.all() requires at least one argument.`);
  }
}
exports.all = all;
