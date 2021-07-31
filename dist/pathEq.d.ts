import { Curried } from "./types";
export declare function pathEq<Input>(path: string[], value: any, arrOrObj?: Input): boolean | Curried<Input, boolean>;
