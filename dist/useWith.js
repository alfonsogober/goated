"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWith = void 0;
function useWith(fn, transformers) {
    let accumulatedArgs = [];
    function curriedFn(...args) {
        accumulatedArgs = accumulatedArgs.concat(args);
        if (transformers.length === accumulatedArgs.length)
            return fn.apply(fn, transformers.map((transformer, index) => transformer(accumulatedArgs[index])));
        else if (transformers.length < accumulatedArgs.length)
            return fn.apply(fn, transformers.map((transformer, index) => transformer(accumulatedArgs[index])).concat(accumulatedArgs.slice(transformers.length)));
        else
            return curriedFn;
    }
    return curriedFn;
}
exports.useWith = useWith;
