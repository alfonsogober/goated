import { Curried } from "./types";
export declare function useWith<Input, Output>(
  fn: Function,
  transformers: Function[]
): Curried<Input, Output>;
