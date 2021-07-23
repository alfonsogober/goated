import { Curried } from "./types";
export declare function take<Input>(
  index: number,
  arrOrObj?: Input[] | Pick<any, "take">
): Input[] | Curried<Input[] | Pick<any, "take">, Input[]>;
