import { Curried, Predicate } from './types';

export function when<Input, Output>(pred: Predicate<Input>, fn: Curried<Input, Output>): Curried<Input, Output | Input> {
  if (typeof pred === 'function' && typeof fn === 'function') {
    return (input: Input) => {
      const predResult = pred(input)
      if (predResult) {
        return fn(input)
      } else {
        return input
      }
    }
  } else {
    throw new Error(`goated.when() only accepts functions as arguments. Received ${pred}, ${fn}`)
  }
}