import { Reducer, List, Curried } from "./types";
import { keys } from "./keys";

export function reduce<Input, Output>(
  fn: Reducer<Input, Output>,
  initialElement: Output,
  arrOrObj?: List<Input>
): Output | Curried<Input, Output> {
  const innerReduce = (arrOrObj) => {
    if (arrOrObj instanceof Array) {
      return arrOrObj.reduce(fn, initialElement);
    } else if (arrOrObj instanceof Object) {
      return keys(arrOrObj).reduce(
        (prev, curr, idx) => fn(prev, arrOrObj[curr], idx, arrOrObj),
        initialElement
      );
    } else
      throw new Error(
        `goated.reduce() only accepts arrays or objects. Received ${arrOrObj}`
      );
  };
  return arrOrObj ? innerReduce(arrOrObj) : innerReduce;
}
