import { Curried } from "./types";

export function and(...args): boolean | Curried<any, boolean> {
  const innerAnd = (b: any) => !!(args[0] && b);
  return args.length === 2 ? innerAnd(args[1]) : innerAnd;
}
