import { Curried } from "./types";
export declare function propEq<Input>(
  prop: keyof Input,
  value: any,
  obj?: Input
): boolean | Curried<Input, boolean>;
