import { Curried } from "./types";
export declare function split(
  separator: string,
  str?: string
): string[] | Curried<string, string[]>;
