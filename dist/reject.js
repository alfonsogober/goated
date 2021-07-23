"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reject = void 0;
const keys_1 = require("./keys");
function reject(fn, arrOrObj) {
  const innerFilter = (arrOrObj) => {
    if (arrOrObj instanceof Array) {
      return arrOrObj.filter((item) => !fn(item));
    } else if (arrOrObj instanceof Object) {
      let result = {};
      keys_1.keys(arrOrObj).map((key) => {
        if (!fn(arrOrObj[key])) result[key] = arrOrObj[key];
      });
      return result;
    } else
      throw new Error(
        `goated.reject() only accepts arrays or objects. Received ${arrOrObj}`
      );
  };
  return arrOrObj ? innerFilter(arrOrObj) : innerFilter;
}
exports.reject = reject;
