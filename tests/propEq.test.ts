import { propEq } from "../dist/propEq";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.propEq()", () => {
  it("should return true when prop matches value", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const obj: Foo = { foo: 1, bar: 2, baz: 3 };

    expect(propEq<Foo>("bar", 2, obj)).to.equal(true);
  });

  it("should return false when prop doesn't match value", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const obj: Foo = { foo: 1, bar: 2, baz: 3 };

    expect(propEq<Foo>("bar", 1, obj)).to.equal(false);
  });

  it("should return curried function", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const obj: Foo = { foo: 1, bar: 2, baz: 3 };
    const isFooBar2 = <Curried<Foo, boolean>>propEq<Foo>("bar", 2);

    expect(isFooBar2(obj)).to.equal(true);
  });
});
