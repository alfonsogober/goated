export declare type Mapper<T, K> = (
  element: T,
  indexOrKey: number | string,
  arrayOrObj?: List<T>
) => K;
export declare type Reducer<T, K> = (
  prev: K,
  curr: T,
  indexOrKey: number | string,
  arrayOrObj?: List<T>
) => K;
export declare type Curried<T, K> = (...input: T[]) => K;
export declare type Predicate<T> = (input: T) => boolean;
export declare type List<T> = Array<T> | Object;
export declare type GroupSelector<T> = (item: T) => string | number | symbol;
