import { Curried, Semigroup } from "./types";

export function concat<Input>(
  a: Input[],
  ...rest
): Semigroup<Input> | Curried<Semigroup<Input>, Semigroup<Input>> {
  const innerConcat = (...args) => a.concat.apply(a, args);
  return a instanceof Array && rest[0]
    ? innerConcat.apply(innerConcat, rest)
    : innerConcat;
}
