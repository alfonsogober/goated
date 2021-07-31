import { List, Curried, Predicate } from "./types";
import { keys } from "./keys";

export function filter<Input>(fn: Predicate<Input>, arrOrObj?: List<Input>) {
  const innerFilter = (arrOrObj: List<Input>) => {
    if (arrOrObj instanceof Array) {
      return arrOrObj.filter(fn);
    } else if (typeof arrOrObj === "object") {
      let result = {};
      keys(arrOrObj).map((key: string) => {
        if (fn(arrOrObj[key])) result[key] = arrOrObj[key];
      });
      return result;
    } else
      throw new Error(
        `goated.filter() only accepts arrays or objects. Received ${arrOrObj}`
      );
  };
  return arrOrObj ? innerFilter(arrOrObj) : innerFilter;
}
