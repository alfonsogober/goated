import { Curried } from "./types";
import * as Bluebird from "bluebird";

export function compose<Input, Output>(
  ...args: Curried<any, any | Promise<any>>[]
): Curried<Input, Output | Promise<Output>> {
  const hasPromises = args.reduce(
    (arg, nextArg): boolean => !!nextArg?.hasOwnProperty("then") ?? arg,
    false
  );
  if (args.length) {
    if (hasPromises) {
      return async (...innerArgs: Input[]) =>
        Bluebird.reduce(
          args.reverse(),
          async (prev, curr, index) =>
            index === 0 ? curr.apply(curr, prev) : curr(prev),
          innerArgs
        );
    } else {
      return (...innerArgs: Input[]) =>
        args
          .reverse()
          .reduce(
            (prev, curr, index) =>
              index === 0 ? curr.apply(curr, prev) : curr(prev),
            innerArgs
          );
    }
  } else {
    throw new Error(`goated.compose() requires at least one argument.`);
  }
}
