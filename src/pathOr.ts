export function pathOr<Input extends object>(
  defaultValue: any,
  path: string[],
  arrOrObj?: Input
): Input[keyof Input] {
  const innerPathOr = (arrOrObj: Input) =>
    path.reduce((acc, curr) => acc?.[curr], arrOrObj) ?? defaultValue;
  return arrOrObj ? innerPathOr(arrOrObj) : innerPathOr;
}
