import { Curried, Semigroup } from "./types";

export function concat<Input>(
  a: Semigroup<Input>,
  b?: Semigroup<Input>
): Semigroup<Input> | Curried<Semigroup<Input>, Semigroup<Input>> {
  const innerConcat = (b) => a.concat(b);
  return b ? innerConcat(b) : innerConcat;
}
