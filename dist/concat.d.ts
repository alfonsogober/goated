import { Curried, Semigroup } from "./types";
export declare function concat<Input>(
  a: Input[],
  ...rest: any[]
): Semigroup<Input> | Curried<Semigroup<Input>, Semigroup<Input>>;
