"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = void 0;
function path(path, arrOrObj) {
  const innerPath = (arrOrObj) =>
    path.reduce((acc, curr) => acc[curr], arrOrObj);
  return arrOrObj ? innerPath(arrOrObj) : innerPath;
}
exports.path = path;
