import { List, Curried, Predicate } from "./types";
export declare function reject<Input>(
  fn: Predicate<Input>,
  arrOrObj?: List<Input>
): List<Input> | Curried<Input, Input>;
