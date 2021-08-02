import { Curried } from "./types";

export function divide(
  a: number,
  b?: number
): number | Curried<number, number> {
  const innerDivide = (b: number) =>
    b !== 0
      ? a / b
      : (() => {
          throw new Error("goated.divide() cannot divide by zero");
        })();
  return typeof b === "number" && b !== 0 ? innerDivide(b) : innerDivide;
}
