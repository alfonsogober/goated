import { Curried } from "./types";
export declare function find<Input>(
  predicate: ((item: Input) => boolean) | any,
  arr?: Input[]
): Input | Curried<Input[], Input>;
