import { Curried } from "./types";

export function split(
  separator: string,
  str?: string
): string[] | Curried<string, string[]> {
  const innerSplit = (str: string) => str.split(separator);
  return str ? innerSplit(str) : innerSplit;
}
