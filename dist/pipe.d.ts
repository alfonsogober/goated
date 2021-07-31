import { Curried } from "./types";
export declare function pipe<Input, Output>(...args: Curried<any, any | Promise<any>>[]): Curried<Input, Output | Promise<Output>>;
