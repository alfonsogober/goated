import { Curried, Semigroup } from "./types";
export declare function concat<Input>(
  a: Semigroup<Input>,
  b?: Semigroup<Input>
): Semigroup<Input> | Curried<Semigroup<Input>, Semigroup<Input>>;
