import { Curried } from './types';

export function pick<Input>(keys: (keyof Input)[], obj?: Input): Partial<Input> | Curried<Input, Partial<Input>> {
  const innerPick = (obj: Input) => {
    return keys.reduce((newObj, key) => ({ ...newObj, [key]: obj[key] }), {})
  }
  return obj ? innerPick(obj) : innerPick
}