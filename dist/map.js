"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
const keys_1 = require("./keys");
function map(fn, arrOrObj) {
    const innerMap = (arrOrObj) => {
        if (arrOrObj instanceof Array) {
            return arrOrObj.map(fn);
        }
        else if (arrOrObj instanceof Object) {
            let result = {};
            keys_1.keys(arrOrObj).map((key) => result[key] = fn(arrOrObj[key], key, arrOrObj));
            return result;
        }
        else
            throw new Error(`goated.map() only accepts arrays or objects. Received ${arrOrObj}`);
    };
    return arrOrObj ? innerMap(arrOrObj) : innerMap;
}
exports.map = map;
