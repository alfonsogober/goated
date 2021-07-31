"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = void 0;
function join(separator, arr) {
    const innerJoin = (arr) => arr.join(separator);
    return arr ? innerJoin(arr) : innerJoin;
}
exports.join = join;
