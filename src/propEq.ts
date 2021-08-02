import { Curried } from "./types";
import { equals } from "./equals";

export function propEq<Input>(
  prop: keyof Input,
  value: any,
  obj?: Input
): boolean | Curried<Input, boolean> {
  const innerPropEq = (obj: Input): boolean =>
    <boolean>equals<Input[keyof Input]>(obj[prop], value);
  return obj ? innerPropEq(obj) : innerPropEq;
}
