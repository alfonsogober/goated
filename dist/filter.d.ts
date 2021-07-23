import { List, Curried, Predicate } from "./types";
export declare function filter<Input>(
  fn: Predicate<Input>,
  arrOrObj?: List<Input>
): List<Input> | Curried<Input, Input>;
