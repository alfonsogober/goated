import { Curried } from "./types";
export declare function pathOr<Input extends object>(
  defaultValue: any,
  path: string[],
  arrOrObj?: Input
): any | Curried<Input, any>;
