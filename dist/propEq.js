"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEq = void 0;
const equals_1 = require("./equals");
function propEq(prop, value, obj) {
  const innerPropEq = (obj) => equals_1.equals(obj[prop], value);
  return obj ? innerPropEq(obj) : innerPropEq;
}
exports.propEq = propEq;
