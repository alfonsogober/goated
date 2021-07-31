"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
function map(fn, arrOrObj) {
  const innerMap = (arrOrObj) => {
    if (arrOrObj instanceof Array) {
      return arrOrObj.map(fn);
    } else if (arrOrObj instanceof Object) {
      return Object.keys(arrOrObj).reduce(
        (prev, curr) =>
          Object.assign(Object.assign({}, prev), {
            [curr]: fn(arrOrObj[curr], curr, arrOrObj),
          }),
        {}
      );
    } else
      throw new Error(
        `goated.map() only accepts arrays or objects. Received ${arrOrObj}`
      );
  };
  return arrOrObj ? innerMap(arrOrObj) : innerMap;
}
exports.map = map;
