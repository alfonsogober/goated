"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
function groupBy(selector) {
    return (input) => {
        let result = {};
        input.map((item) => {
            const key = typeof selector === 'function' ? selector(item) : item[selector];
            if (result.hasOwnProperty(key))
                result[key].push(item);
            else
                result[key] = [item];
        });
        return result;
    };
}
exports.groupBy = groupBy;
