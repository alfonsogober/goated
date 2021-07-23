import { List, Curried, Predicate } from "./types";
import { keys } from "./keys";

export function reject<Input>(
  fn: Predicate<Input>,
  arrOrObj?: List<Input>
): List<Input> | Curried<Input, Input> {
  const innerFilter = (arrOrObj: List<Input>) => {
    if (arrOrObj instanceof Array) {
      return arrOrObj.filter((item) => !fn(item));
    } else if (arrOrObj instanceof Object) {
      let result = {};
      keys(arrOrObj).map((key: string) => {
        if (!fn(arrOrObj[key])) result[key] = arrOrObj[key];
      });
      return result;
    } else
      throw new Error(
        `goated.reject() only accepts arrays or objects. Received ${arrOrObj}`
      );
  };
  return arrOrObj ? innerFilter(arrOrObj) : innerFilter;
}
