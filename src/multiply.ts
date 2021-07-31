import { Curried } from "./types";

export function multiply(
  a: number,
  b?: number
): number | Curried<number, number> {
  const innerMultiply = (b: number) => a * b;
  return typeof b === "number" ? innerMultiply(b) : innerMultiply;
}
