export function propOr<Input>(
  defaultValue: Input[keyof Input],
  key: keyof Input,
  obj?: Input
) {
  const innerPropOr = (obj: Input) =>
    obj.hasOwnProperty(key) && !!obj[key] ? obj[key] : defaultValue;
  return obj ? innerPropOr(obj) : innerPropOr;
}
