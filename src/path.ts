import { Curried } from "./types";

export function path<Input extends object>(
  path: string[],
  arrOrObj?: Input
): any | Curried<Input, any> {
  const innerPath = (arrOrObj: Input): any =>
    path.reduce((acc, curr) => acc[curr], arrOrObj);
  return arrOrObj ? innerPath(arrOrObj) : innerPath;
}
