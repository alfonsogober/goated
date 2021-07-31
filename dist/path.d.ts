import { Curried } from "./types";
export declare function path<Input extends object>(path: string[], arrOrObj?: Input): any | Curried<Input, any>;
