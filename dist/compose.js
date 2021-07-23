"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
function compose(...args) {
    if (typeof args[0] === 'function') {
        return (...innerArgs) => args.reverse().reduce((prev, curr, index) => index === 0 ? curr.apply(curr, prev) : curr(prev), innerArgs);
    }
    else {
        throw new Error(`goated.compose() requires at least one argument.`);
    }
}
exports.compose = compose;
