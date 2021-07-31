"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.take = void 0;
function take(index, arrOrObj) {
    const innerTake = (arrOrObj) => {
        if (arrOrObj.hasOwnProperty("take"))
            return arrOrObj.take(index);
        return arrOrObj.slice(0, index);
    };
    return arrOrObj ? innerTake(arrOrObj) : innerTake;
}
exports.take = take;
