import { Curried } from "./types";
import { equals } from "./equals";

export function pathEq<Input>(
  path: string[],
  value: any,
  arrOrObj?: Input
): boolean | Curried<Input, boolean> {
  const innerPathEq = (arrOrObj: Input): boolean => <boolean>equals<Input>(
      path.reduce((acc, curr) => acc?.[curr] ?? false, arrOrObj),
      value
    );
  return arrOrObj ? innerPathEq(arrOrObj) : innerPathEq;
}
