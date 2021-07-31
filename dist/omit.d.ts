import { Curried } from "./types";
export declare function omit<Input>(
  keysToOmit: (keyof Input)[],
  obj?: Input
): Partial<Input> | Curried<Input, Partial<Input>>;
