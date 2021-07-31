import { cond } from "./cond";
import { always } from "./always";
import { is } from "./is";
import { Curried } from "./types";
import { T } from "./T";

export function empty<Input>(input: Input): Input {
  return cond([
    [<Curried<Array<any>, boolean>>is(Array), always([])],
    [<Curried<Object, boolean>>is(Object), always({})],
    [<Curried<String, boolean>>is(String), always("")],
    [<Curried<Number, boolean>>is(Number), always(0)],
    [T, always(undefined)],
  ])(input);
}
