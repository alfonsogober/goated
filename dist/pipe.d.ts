import { Curried } from "./types";
export declare function pipe<Input, Output>(
  ...args: Curried<any, any>[]
): Curried<Input, Output>;
