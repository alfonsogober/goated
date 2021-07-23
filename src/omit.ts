import { Curried } from './types';
import { keys } from './keys';

export function omit<Input>(keysToOmit: (keyof Input)[], obj?: Input): Partial<Input> | Curried<Input, Partial<Input>> {
  const innerOmit = (obj: Input) => {
    return keys(obj).reduce((newObj, key: keyof Input) => keysToOmit.indexOf(key) === -1 ? ({ ...newObj, [key]: obj[key] }) : newObj, {})
  }
  return obj ? innerOmit(obj) : innerOmit
}