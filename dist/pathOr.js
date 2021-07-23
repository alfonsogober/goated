"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathOr = void 0;
function pathOr(defaultValue, path, arrOrObj) {
  const innerPathOr = (arrOrObj) => {
    var _a;
    return (_a = path.reduce(
      (acc, curr) => (acc === null || acc === void 0 ? void 0 : acc[curr]),
      arrOrObj
    )) !== null && _a !== void 0
      ? _a
      : defaultValue;
  };
  return arrOrObj ? innerPathOr(arrOrObj) : innerPathOr;
}
exports.pathOr = pathOr;
