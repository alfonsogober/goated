"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
const pipe_1 = require("./pipe");
const keys_1 = require("./keys");
const reduce_1 = require("./reduce");
const equals_1 = require("./equals");
function find(predicate, arr) {
  const innerFind = (arr) =>
    typeof predicate === "function"
      ? arr.find(predicate)
      : arr.find((el) =>
          pipe_1.pipe(
            keys_1.keys,
            reduce_1.reduce((acc, key) => {
              var _a;
              return (_a = equals_1.equals(
                el === null || el === void 0 ? void 0 : el[key],
                predicate[key]
              )) !== null && _a !== void 0
                ? _a
                : acc;
            }, null)
          )(predicate)
        );
  return arr ? innerFind(arr) : innerFind;
}
exports.find = find;
