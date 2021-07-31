import * as Bluebird from "bluebird";
import { Curried } from "./types";

export function all<Input>(
  args: (Input | Promise<Input>)[]
): Promise<Input>[] | boolean {
  const hasPromises = args.reduce(
    (arg, nextArg): boolean =>
      !!(nextArg instanceof Promise || (nextArg as any)?.then) ?? arg,
    false
  );
  if (args.length) {
    if (hasPromises) {
      return Bluebird.all(args);
    } else {
      return args.reduce((prev, curr) => !!(curr && prev), true);
    }
  } else {
    throw new Error(`goated.all() requires at least one argument.`);
  }
}
