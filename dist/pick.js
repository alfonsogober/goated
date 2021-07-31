"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
function pick(keys, obj) {
    const innerPick = (obj) => {
        return keys.reduce((newObj, key) => (Object.assign(Object.assign({}, newObj), { [key]: obj[key] })), {});
    };
    return obj ? innerPick(obj) : innerPick;
}
exports.pick = pick;
