import { Curried } from "./types";
export declare function join(
  separator: string,
  arr?: string[]
): string | Curried<string[], string>;
