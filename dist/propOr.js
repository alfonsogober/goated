"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propOr = void 0;
function propOr(defaultValue, key, obj) {
  const innerPropOr = (obj) =>
    obj.hasOwnProperty(key) && !!obj[key] ? obj[key] : defaultValue;
  return obj ? innerPropOr(obj) : innerPropOr;
}
exports.propOr = propOr;
