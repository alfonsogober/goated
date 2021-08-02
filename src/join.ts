import { Curried } from "./types";

export function join(
  separator: string,
  arr?: string[]
): string | Curried<string[], string> {
  const innerJoin = (arr: string[]) => arr.join(separator);
  return arr ? innerJoin(arr) : innerJoin;
}
