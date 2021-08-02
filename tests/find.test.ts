import { find } from "../dist/find";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";
import { propEq } from "../src/propEq";

const expect = chai.expect;

describe("goated.find()", () => {
  it("should find array", () => {
    const array = [1, 2, 3];
    const isOne = (item: number) => item === 1;

    expect(find<number>(isOne, array)).to.equal(1);
  });

  it("should find by object key", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const arr = [
      { foo: 1, bar: 2, baz: 3 },
      { foo: 4, bar: 5, baz: 6 },
    ];
    const isFooOne = { foo: 1 };

    expect(find<Foo>(isFooOne, arr)).to.deep.equal({ foo: 1, bar: 2, baz: 3 });
  });

  it("should find by object key with goated function", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const arr = [
      { foo: 1, bar: 2, baz: 3 },
      { foo: 4, bar: 5, baz: 6 },
    ];
    const isFooOne = propEq("foo", 1);

    expect(find<Foo>(isFooOne, arr)).to.deep.equal({ foo: 1, bar: 2, baz: 3 });
  });

  it("should (curried) find", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const arr = [
      { foo: 1, bar: 2, baz: 3 },
      { foo: 4, bar: 5, baz: 6 },
    ];
    const isFooOne = { foo: 1 };

    const fn = <Curried<Foo[], Foo>>find<Foo>(isFooOne);

    expect(fn(arr)).to.deep.equal({ foo: 1, bar: 2, baz: 3 });
  });
});
