import { Curried } from "./types";
export declare function cond(
  pairs: Function[][],
  ...rest: any[]
): Curried<any, any>;
