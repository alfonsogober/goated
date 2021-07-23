import * as isEqual from "lodash.isequal";
import { Curried } from "./types";

export function equals<Input>(
  a: Input,
  b?: Input
): boolean | Curried<Input, boolean> {
  const innerEquals = (b: Input) => {
    return isEqual(a, b);
  };
  return b ? innerEquals(b) : innerEquals;
}
