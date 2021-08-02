import { Curried } from "./types";

export function isNil(input: any): boolean {
  return input === null || input === undefined || isNaN(input);
}
