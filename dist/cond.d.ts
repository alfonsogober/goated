import { Curried } from "./types";
export declare function cond(pairs: (Function | Curried<any, any>)[][], ...rest: any[]): Curried<any, any>;
