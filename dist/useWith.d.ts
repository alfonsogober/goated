import { Curried } from "./types";
export declare function useWith<Input>(fn: Function, transformers: Function[]): Curried<Input, any>;
