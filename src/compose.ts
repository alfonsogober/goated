import { Curried } from './types';

export function compose<Input, Output>(...args: Curried<any, any>[]): Curried<Input, Output> {
  if (typeof args[0] === 'function') {
    return (...innerArgs: Input[]) => args.reverse().reduce((prev, curr, index) => index === 0 ? curr.apply(curr, prev) : curr(prev), innerArgs)
  } else {
    throw new Error(`goated.compose() requires at least one argument.`)
  }
}