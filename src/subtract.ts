import { Curried } from "./types";

export function subtract(
  a: number,
  b?: number
): number | Curried<number, number> {
  const innerSubtract = (b: number) => a - b;
  return typeof b === "number" ? innerSubtract(b) : innerSubtract;
}
