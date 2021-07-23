export function values<Input>(obj: Input): Input[keyof Input][] {
  return Object.values(obj);
}
