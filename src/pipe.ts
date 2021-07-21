import { Curried } from './types';

export function pipe<Input, Output>(...args: any[]): Curried<Input, Output> {
  if (typeof args[0] === 'function') {
    return function (...innerArgs: Input[]) {
      return args.reduce((prev, curr, index) => {
        if (index === 0){
          return curr.apply(curr, prev)
        } else {
          return curr(prev)
        }
      }, innerArgs)
    }
  } else {
    throw new Error(`goated.pipe() requires at least one argument.`)
  }
}