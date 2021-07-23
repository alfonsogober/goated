import { GroupSelector, Curried } from './types';

export function groupBy<Input>(selector: GroupSelector<Input> | keyof Input): Curried<Input[], Object> {
  return (input: Input[]) => {
    let result = {}
    input.map((item) => {
      const key = typeof selector === 'function' ? selector(item) : item[selector]
      if (result.hasOwnProperty(key as PropertyKey)) result[key as PropertyKey].push(item)
      else result[key as PropertyKey] = [item]
    })
    return result
  }
}