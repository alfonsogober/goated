import { Curried } from "./types";
export declare function add(
  a: number,
  b?: number
): number | Curried<number, number>;
