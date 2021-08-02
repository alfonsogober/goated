import { Curried } from "./types";
export declare function append<Input>(
  elToAppend: any,
  arr?: Input[]
): Input[] | Curried<Input[], Input[]>;
