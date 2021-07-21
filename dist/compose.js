"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
function compose(...args) {
    if (typeof args[0] === 'function') {
        return function (...innerArgs) {
            return args.reverse().reduce((prev, curr, index) => {
                if (index === 0) {
                    return curr.apply(curr, prev);
                }
                else {
                    return curr(prev);
                }
            }, innerArgs);
        };
    }
    else {
        throw new Error(`goated.pipe() requires at least one argument.`);
    }
}
exports.compose = compose;
