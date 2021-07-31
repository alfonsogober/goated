"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omit = void 0;
const keys_1 = require("./keys");
function omit(keysToOmit, obj) {
    const innerOmit = (obj) => {
        return keys_1.keys(obj).reduce((newObj, key) => keysToOmit.indexOf(key) === -1
            ? Object.assign(Object.assign({}, newObj), { [key]: obj[key] }) : newObj, {});
    };
    return obj ? innerOmit(obj) : innerOmit;
}
exports.omit = omit;
