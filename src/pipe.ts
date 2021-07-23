import { Curried, List } from './types';

export function pipe<Input, Output>(...args: Curried<any, any>[]): Curried<Input, Output> {
  if (typeof args[0] === 'function') {
    return (...innerArgs: Input[]) => args.reduce((prev, curr, index) => index === 0 ? curr.apply(curr, prev) : curr(prev), innerArgs)
  } else {
    throw new Error(`goated.pipe() requires at least one argument.`)
  }
}