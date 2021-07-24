"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathEq = void 0;
const equals_1 = require("./equals");
function pathEq(path, value, arrOrObj) {
  const innerPathEq = (arrOrObj) =>
    equals_1.equals(
      path.reduce((acc, curr) => {
        var _a;
        return (_a = acc === null || acc === void 0 ? void 0 : acc[curr]) !==
          null && _a !== void 0
          ? _a
          : false;
      }, arrOrObj),
      value
    );
  return arrOrObj ? innerPathEq(arrOrObj) : innerPathEq;
}
exports.pathEq = pathEq;
