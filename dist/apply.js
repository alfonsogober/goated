"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = void 0;
function apply(fn, args) {
    const innerApply = (args) => fn.apply(fn, args);
    return args ? innerApply(args) : innerApply;
}
exports.apply = apply;
