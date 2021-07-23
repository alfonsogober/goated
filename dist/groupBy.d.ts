import { GroupSelector, Curried } from './types';
export declare function groupBy<Input>(selector: GroupSelector<Input> | keyof Input): Curried<Input[], Object>;
