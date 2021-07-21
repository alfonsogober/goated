import { Curried } from './types';

export function groupBy<Input>(selector: Function | string): Curried<Input[], Object> {
  return (input: Input[]) => {
    let result = {}
    input.map((item) => {
      const key = typeof selector === 'function' ? selector(item) : item[selector]
      if (result.hasOwnProperty(key)) result[key].push(item)
      else result[key] = [item]
    })
    return result
  }
}