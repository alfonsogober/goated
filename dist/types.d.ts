export declare type Mapper<T, K> = (element: T, indexOrKey: number | string, arrayOrObj?: List<T>) => K;
export declare type Reducer<T> = (prev: T, curr: T, indexOrKey: number | string, arrayOrObj?: List<T>) => any;
export declare type Curried<T, K> = (...input: T[]) => K;
export declare type Predicate<T> = (input: T) => boolean;
export declare type List<T> = Array<T> | Object;
