import { Curried } from "./types";
export declare function pick<Input>(
  keys: (keyof Input)[],
  obj?: Input
): Partial<Input> | Curried<Input, Partial<Input>>;
