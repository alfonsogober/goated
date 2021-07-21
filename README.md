# Goated

a currying library for goats 🐐

---

![Curry Goat, best dish on the planet](http://www.browngirlmagazine.com/wp-content/uploads/2017/07/Angled-Hero-Image.jpg)

This library was inspired by [Ramda](https://ramdajs.com/), with a similar goal in mind - completely point-free, curly-bracket-less Javascript code.

The key differences between Goated and Ramda are thus:

- Types are not mangled. Goated is built by and for Typescript engineers. No more `as unknown as any` and other such nonsense just to pass tslint.
- Methods are stripped down to array/collection basics, plus some extras like `pipe` and `compose`. The fantasy-land spec is nice but kind of a distraction. We just want pure functional code.
- Errors are actually useful and stack traces are accurate when debugging.

## Install

```Bash
npm i goated
```

or

```Bash
yarn add goated
```

Then, import:

```Typescript
import { map, pipe, keys, filter, /* etc */ } from 'goated'
```

## API

### compose

Performs right-to-left function composition. The last argument may have any arity; the remaining arguments must be unary.

```Typescript
const negate = (num) => -num
const powThenNegate = compose<number, number>(negate, Math.pow) // Works with bound functions and preserves context

console.log(powThenNegate(3, 3)) // -27
```

### filter

Takes a predicate and a Filterable, and returns a new filterable of the same type containing the members of the given filterable which satisfy the given predicate. Filterable objects include plain objects or any object that has a filter method such as Array.

Dispatches to the `filter` method of the second argument, if present.

```Typescript
const onlyOdd = (item: number) => item % 2 === 1

const array = [1, 2, 3]

console.log(filter<number>(onlyOdd, array)) // [1, 3]

const obj = { foo: 1, bar: 2, baz: 3 }

console.log(filter<number>(onlyOdd, obj)) // { foo: 1, baz: 3 }
```

### groupBy

Splits a list into sub-lists stored in an object, based on the result of **either** calling a String-returning function on each element **or** evaluating the selector key of each element, and grouping the results according to values returned.

Dispatches to the `groupBy` method of the second argument, if present.

```Typescript
type ObjType = { a: string }
const groupByFn = groupBy<ObjType>((item: ObjType) => (item.a === 'b') ? 'foo' : 'bar')

console.log(groupByFn([{ a: 'b' }, { a: 'd' }])) // { foo: [{ a: 'b' }], bar: [{ a: 'd' }] }

const groupByKey = groupBy<ObjType>('a')

console.log(groupByKey([{ a: 'b' }, { a: 'd' }])) // { b: [{ a: 'b' }], d: [{ a: 'd' }] }
```

### keys

Returns a list containing the names of all the enumerable own properties of the supplied object. Note that the order of the output array is not guaranteed to be consistent across different JS platforms.

```Typescript
keys({ a: 1, b: 2, c: 3 }); // ['a', 'b', 'c']
```

### map

Takes a function and a functor, applies the function to each of the functor's values, and returns a functor of the same shape.

Goated provides suitable map implementations for Array and Object, so this function may be applied to [1, 2, 3] or {x: 1, y: 2, z: 3}.

Dispatches to the `map` method of the second argument, if present.

Note that unlike `R.map()`, indexes are included by default.

```Typescript
const array = [1, 2, 3]
const obj = { 'foo': 1, 'bar': 2, 'baz': 3 }

const double = (item: number) => item * 2

console.log(map(double, array)) // [2, 4, 6]
console.log(map(double, obj)) // { 'foo': 2, 'bar': 4, 'baz': 6 }
```

### pipe

Performs left-to-right function composition. The first argument may have any arity; the remaining arguments must be unary.

```Typescript
const negate = (num) => -num
const powThenNegate = pipe<number, number>(Math.pow, negate) // Works with bound functions and preserves context

console.log(powThenNegate(3, 3)) // -27
```

### reduce

Returns a single item by iterating through the list, successively calling the iterator function and passing it an accumulator value and the current value from the array, and then passing the result to the next call.

The iterator function receives two values: (acc, value).

```Typescript
const array = [1, 2, 3]
const add = (a, b) => a + b

console.log(reduce(add, 0, array)) // 6
```

### when

Tests the final argument by passing it to the given predicate function. If the predicate is satisfied, the function will return the result of calling the whenTrueFn function with the same argument. If the predicate is not satisfied, the argument is returned as is.

```Typescript
const isFoo = (input) => input === 'foo'
const doBar = (input) => 'bar'

const barWhenFoo = when(isFoo, doBar)

console.log(barWhenFoo('foo')) // 'bar'
```
