export function keys<Input>(obj: Input): Array<keyof Input> {
  return Object.keys(obj) as Array<keyof Input>;
}
