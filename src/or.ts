import { Curried } from "./types";

export function or(...args): boolean | Curried<any, boolean> {
  const innerOr = (b: any) => !!(args[0] || b);
  return args.length === 2 ? innerOr(args[1]) : innerOr;
}
