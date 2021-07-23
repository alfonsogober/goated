"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prop = void 0;
function prop(prop, arrOrObj) {
  const innerProp = (arrOrObj) => {
    return arrOrObj[prop];
  };
  return arrOrObj ? innerProp(arrOrObj) : innerProp;
}
exports.prop = prop;
