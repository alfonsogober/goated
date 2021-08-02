import { Curried } from "./types";
import { pipe } from "./pipe";
import { keys } from "./keys";
import { reduce } from "./reduce";
import { equals } from "./equals";

export function find<Input>(
  predicate: ((item: Input) => boolean) | any,
  arr?: Input[]
): Input | Curried<Input[], Input> {
  const innerFind = (arr: Input[]) =>
    typeof predicate === "function"
      ? arr.find(
          predicate as (
            this: void,
            value: Input,
            index: number,
            obj: Input[]
          ) => boolean
        )
      : arr.find((el) =>
          pipe(
            keys,
            <Curried<(keyof Input)[], boolean>>(
              reduce(
                (acc, key: keyof Input) =>
                  <boolean>equals(el?.[key], predicate[key]) ?? acc,
                null
              )
            )
          )(predicate)
        );
  return arr ? innerFind(arr) : innerFind;
}
