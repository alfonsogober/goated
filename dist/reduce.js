"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = void 0;
const keys_1 = require("./keys");
function reduce(fn, initialElement, arrOrObj) {
  const innerReduce = (arrOrObj) => {
    if (arrOrObj instanceof Array) {
      return arrOrObj.reduce(fn, initialElement);
    } else if (arrOrObj instanceof Object) {
      return keys_1
        .keys(arrOrObj)
        .reduce(
          (prev, curr, idx) => fn(prev, arrOrObj[curr], idx, arrOrObj),
          initialElement
        );
    } else
      throw new Error(
        `goated.reduce() only accepts arrays or objects. Received ${arrOrObj}`
      );
  };
  return arrOrObj ? innerReduce(arrOrObj) : innerReduce;
}
exports.reduce = reduce;
