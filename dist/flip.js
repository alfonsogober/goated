"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = void 0;
function flip(fn) {
  function innerFlip(...args) {
    return fn.apply(fn, args.reverse());
  }
  return innerFlip;
}
exports.flip = flip;
