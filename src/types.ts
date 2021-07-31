export type Mapper<T, K> = (
  element: T,
  indexOrKey: number | string,
  arrayOrObj?: List<T>
) => K | Promise<K>;

export type Reducer<T, K> = (
  prev: K,
  curr: T,
  indexOrKey: number | string,
  arrayOrObj?: List<T>
) => K | Promise<K>;

export type Curried<T, K> = (...input: T[]) => K | Promise<K>;

export type Semigroup<T> =
  | { concat: (a: Semigroup<T>) => Semigroup<T> }
  | Array<T>
  | string;

export type Predicate<T> = (input: T) => boolean;

export type List<T> = Array<T> | Object | Function | Promise<T>;

export type GroupSelector<T> = (item: T) => String | Number | symbol;

export type Number = number;

export type Object = {};

export type String = string;

export type Boolean = boolean;
