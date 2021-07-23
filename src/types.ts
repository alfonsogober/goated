export type Mapper<T, K> = (
  element: T,
  indexOrKey: number | string,
  arrayOrObj?: List<T>
) => K;

export type Reducer<T, K> = (
  prev: K,
  curr: T,
  indexOrKey: number | string,
  arrayOrObj?: List<T>
) => K;

export type Curried<T, K> = (...input: T[]) => K;

export type Semigroup<T> =
  | { concat: (a: Semigroup<T>) => Semigroup<T> }
  | Array<T>
  | string;

export type Predicate<T> = (input: T) => boolean;

export type List<T> = Array<T> | Object;

export type GroupSelector<T> = (item: T) => string | number | symbol;
