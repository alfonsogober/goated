export declare function pathOr<Input extends object>(
  defaultValue: any,
  path: string[],
  arrOrObj?: Input
): Input[keyof Input];
