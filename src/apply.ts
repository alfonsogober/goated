import { Curried } from "./types";

export function apply(
  fn: Function,
  args?: any[]
): any | Curried<any[], any> {
  const innerApply = (args?: any[]) => fn.apply(fn, args);
  return args ? innerApply(args) : innerApply;
}
