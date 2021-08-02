import { Curried } from "./types";

export function add(a: number, b?: number): number | Curried<number, number> {
  const innerAdd = (b: number) => a + b;
  return typeof b === "number" ? innerAdd(b) : innerAdd;
}
