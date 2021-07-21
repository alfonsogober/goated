import { Mapper, List, Curried } from './types';
export declare function map<Input, Output>(fn: Mapper<Input, Output>, arrOrObj?: List<Input>): List<Output> | Curried<Input, Output>;
