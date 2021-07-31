import * as Bluebird from "bluebird";
import { Curried } from "./types";

export function any(args: any[]): Promise<any>[] | boolean {
  const hasPromises = args.reduce(
    (arg, nextArg): boolean =>
      !!(nextArg instanceof Promise || (nextArg as any)?.then) ?? arg,
    false
  );
  if (args.length) {
    if (hasPromises) {
      return Bluebird.any(args);
    } else {
      return args.reduce((prev, curr) => !!curr ?? prev, false);
    }
  } else {
    throw new Error(`goated.any() requires at least one argument.`);
  }
}
