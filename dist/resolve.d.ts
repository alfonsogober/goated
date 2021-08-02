export declare function resolve<Input>(
  callback: (item: Input) => void,
  input?: Promise<Input> | (() => Promise<Input>)
): Promise<any>;
