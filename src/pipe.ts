import { Curried, List } from "./types";
import * as Bluebird from "bluebird";

export function pipe<Input, Output>(
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
          args,
          async (prev, curr, index) =>
            index === 0 ? curr.apply(curr, prev) : curr(prev),
          innerArgs
        );
    } else {
      return (...innerArgs: Input[]) =>
        args.reduce(
          (prev, curr, index) =>
            index === 0 ? curr.apply(curr, prev) : curr(prev),
          innerArgs
        );
    }
  } else {
    throw new Error(`goated.pipe() requires at least one argument.`);
  }
}
