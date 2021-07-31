import { Curried } from "./types";

export function divideBy(
  a: number,
  b?: number
): number | Curried<number, number> {
  if (a !== 0) {
    const innerDivideBy = (b: number) => b / a;
    return typeof b === "number" ? innerDivideBy(b) : innerDivideBy;
  } else throw new Error("goated.divideBy() cannot divide by zero");
}
