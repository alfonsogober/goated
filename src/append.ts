import { Curried } from "./types";

export function append<Input>(
  elToAppend: any,
  arr?: Input[]
): Input[] | Curried<Input[], Input[]> {
  const innerAppend = (arr: Input[]) => arr.concat([elToAppend]);
  return arr ? innerAppend(arr) : innerAppend;
}
