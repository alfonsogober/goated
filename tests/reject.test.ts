import { reject } from "../dist/reject";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.reject()", () => {
  it("should reject array", () => {
    const array = [1, 2, 3];
    const rejectOdd = (item: number) => item % 2 === 1;

    expect(reject<number>(rejectOdd, array)).to.deep.equal([2]);
  });

  it("should reject object", () => {
    const obj = { foo: 1, bar: 2, baz: 3 };
    const rejectOdd = (item: number) => item % 2 === 1;

    expect(reject<number>(rejectOdd, obj)).to.deep.equal({ bar: 2 });
  });

  it("should (curried) reject", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const obj = { foo: 1, bar: 2, baz: 3 };
    const rejectOdd = (item: number) => item % 2 === 1;

    const fn = <Curried<Foo, number>>reject<number>(rejectOdd);

    expect(fn(obj)).to.deep.equal({ bar: 2 });
  });
});
