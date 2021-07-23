import { Mapper, List, Curried } from "./types";

export function map<Input, Output>(
  fn: Mapper<Input, Output>,
  arrOrObj?: List<Input>
): List<Output> | Curried<Input, Output> {
  const innerMap = (arrOrObj: List<Input>) => {
    if (arrOrObj instanceof Array) {
      return arrOrObj.map(fn);
    } else if (arrOrObj instanceof Object) {
      return Object.keys(arrOrObj).reduce(
        (prev: Partial<Output>, curr: string) => ({
          ...prev,
          [curr]: fn(arrOrObj[curr], curr, arrOrObj),
        }),
        {}
      );
    } else
      throw new Error(
        `goated.map() only accepts arrays or objects. Received ${arrOrObj}`
      );
  };
  return arrOrObj ? innerMap(arrOrObj) : innerMap;
}
