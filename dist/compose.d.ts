import { Curried } from "./types";
export declare function compose<Input, Output>(
  ...args: Curried<any, any>[]
): Curried<Input, Output>;
