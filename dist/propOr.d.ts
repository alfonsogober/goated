export declare function propOr<Input>(
  defaultValue: Input[keyof Input],
  key: keyof Input,
  obj?: Input
): Input[keyof Input] | ((obj: Input) => Input[keyof Input]);
