"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNil = void 0;
function isNil(input) {
    return input === null || input === undefined || isNaN(input);
}
exports.isNil = isNil;
