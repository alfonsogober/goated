"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empty = void 0;
const cond_1 = require("./cond");
const always_1 = require("./always");
const is_1 = require("./is");
const T_1 = require("./T");
function empty(input) {
  return cond_1.cond([
    [is_1.is(Array), always_1.always([])],
    [is_1.is(Object), always_1.always({})],
    [is_1.is(String), always_1.always("")],
    [is_1.is(Number), always_1.always(0)],
    [T_1.T, always_1.always(undefined)],
  ])(input);
}
exports.empty = empty;
