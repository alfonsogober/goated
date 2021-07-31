import { Curried } from "./types";
export declare function apply(
  fn: Function,
  args?: any[]
): any | Curried<any[], any>;
