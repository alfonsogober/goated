import { Curried } from './types';

export function is<Input>(Ctor: Input, val?: any): boolean | Curried<any, boolean> {
  const innerIs = (val) => val != null && val.constructor === Ctor || val instanceof (Ctor as any);
  return arguments.length === 2 ? innerIs(val) : innerIs
}