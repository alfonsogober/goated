import { Curried } from "./types";

export function pathOr<Input extends object>(
  defaultValue: any,
  path: string[],
  arrOrObj?: Input
): any | Curried<Input, any> {
  const innerPathOr = (arrOrObj: Input) =>
    path.reduce((acc, curr) => acc?.[curr], arrOrObj) ?? defaultValue;
  return arrOrObj ? innerPathOr(arrOrObj) : innerPathOr;
}
