import { Mapper, List, Curried } from './types';
import { keys } from './keys'

export function map<Input, Output>(fn: Mapper<Input, Output>, arrOrObj?: List<Input>): List<Output> | Curried<Input, Output> {
  const innerMap = (arrOrObj: List<Input>) => {
    if (arrOrObj instanceof Array) {
      return arrOrObj.map(fn)
    }
    else if (arrOrObj instanceof Object) {
      let result = {}
      keys(arrOrObj).map((key: string) => result[key] = fn(arrOrObj[key], key, arrOrObj))
      return result
    }
    else throw new Error(`goated.map() only accepts arrays or objects. Received ${arrOrObj}`)
  }
  return arrOrObj ? innerMap(arrOrObj) : innerMap
}