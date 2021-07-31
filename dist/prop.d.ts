import { Curried } from "./types";
export declare function prop<Input>(
  prop: keyof Input,
  arrOrObj?: Input
): Input[keyof Input] | Curried<Input, Input[keyof Input]>;
