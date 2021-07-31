"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.append = void 0;
function append(elToAppend, arr) {
    const innerAppend = (arr) => arr.concat([elToAppend]);
    return arr ? innerAppend(arr) : innerAppend;
}
exports.append = append;
