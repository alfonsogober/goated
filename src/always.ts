import { Curried } from "./types";

export function always<Input>(input: Input): Curried<any, Input> {
  return () => input;
}
