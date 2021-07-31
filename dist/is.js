"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = void 0;
function is(Ctor, val) {
    const innerIs = (val) => val != null && val.constructor === Ctor || val instanceof Ctor;
    return arguments.length === 2 ? innerIs(val) : innerIs;
}
exports.is = is;
