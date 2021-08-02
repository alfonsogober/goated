import { Curried } from "./types";

export function flip(fn: Function): Curried<any, any> {
  function innerFlip(...args) {
    return fn.apply(fn, args.reverse());
  }
  return innerFlip;
}
