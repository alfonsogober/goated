import { Curried, List } from "./types";

export function prop<Input>(
  prop: keyof Input,
  arrOrObj?: Input
): Input[keyof Input] | Curried<Input, Input[keyof Input]> {
  const innerProp = (arrOrObj: Input) => {
    return arrOrObj[prop];
  };
  return arrOrObj ? innerProp(arrOrObj) : innerProp;
}
