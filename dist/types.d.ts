export declare type Mapper<T, K> = (
  element: T,
  indexOrKey: number | string,
  arrayOrObj?: List<T>
) => K | Promise<K>;
export declare type Reducer<T, K> = (
  prev: K,
  curr: T,
  indexOrKey: number | string,
  arrayOrObj?: List<T>
) => K | Promise<K>;
export declare type Curried<T, K> = (...input: T[]) => K | Promise<K>;
export declare type Semigroup<T> =
  | {
      concat: (a: Semigroup<T>) => Semigroup<T>;
    }
  | Array<T>
  | string;
export declare type Predicate<T> = (input: T) => boolean;
export declare type List<T> = Array<T> | Object | Function | Promise<T>;
export declare type GroupSelector<T> = (item: T) => String | Number | symbol;
export declare type Number = number;
export declare type Object = {};
export declare type String = string;
export declare type Boolean = boolean;
