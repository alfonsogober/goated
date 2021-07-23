"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const keys_1 = require("./keys");
function filter(fn, arrOrObj) {
  const innerFilter = (arrOrObj) => {
    if (arrOrObj instanceof Array) {
      return arrOrObj.filter(fn);
    } else if (arrOrObj instanceof Object) {
      let result = {};
      keys_1.keys(arrOrObj).map((key) => {
        if (fn(arrOrObj[key])) result[key] = arrOrObj[key];
      });
      return result;
    } else
      throw new Error(
        `goated.filter() only accepts arrays or objects. Received ${arrOrObj}`
      );
  };
  return arrOrObj ? innerFilter(arrOrObj) : innerFilter;
}
exports.filter = filter;
