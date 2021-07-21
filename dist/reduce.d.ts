import { Reducer, List, Curried } from './types';
export declare function reduce<Input, Output>(fn: Reducer<Input>, initialElement: Input, arrOrObj?: List<Input>): Output | Curried<Input, Output>;
