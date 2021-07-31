import { Curried, Predicate } from "./types";
export declare function when<Input, Output>(pred: Predicate<Input>, fn: Curried<Input, Output>): Curried<Input, Output | Input>;
