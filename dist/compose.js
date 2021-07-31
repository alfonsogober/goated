"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
const Bluebird = require("bluebird");
function compose(...args) {
    const hasPromises = args.reduce((arg, nextArg) => { var _a; return (_a = !!(nextArg === null || nextArg === void 0 ? void 0 : nextArg.hasOwnProperty("then"))) !== null && _a !== void 0 ? _a : arg; }, false);
    if (args.length) {
        if (hasPromises) {
            return (...innerArgs) => __awaiter(this, void 0, void 0, function* () {
                return Bluebird.reduce(args.reverse(), (prev, curr, index) => __awaiter(this, void 0, void 0, function* () { return index === 0 ? curr.apply(curr, prev) : curr(prev); }), innerArgs);
            });
        }
        else {
            return (...innerArgs) => args
                .reverse()
                .reduce((prev, curr, index) => index === 0 ? curr.apply(curr, prev) : curr(prev), innerArgs);
        }
    }
    else {
        throw new Error(`goated.compose() requires at least one argument.`);
    }
}
exports.compose = compose;
