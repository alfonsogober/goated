import { prop } from "../dist/prop";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.prop()", () => {
  it("should return specified property from object", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const obj: Foo = { foo: 1, bar: 2, baz: 3 };

    expect(prop<Foo>("foo", obj)).to.equal(1);
  });

  it("should return specified property from array", () => {
    expect(prop<Array<number>>(0, [100])).to.equal(100);
  });

  it("should return curried form of prop()", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const obj: Foo = { foo: 1, bar: 2, baz: 3 };

    const fn = <Curried<Foo, number>>prop<Foo>("foo");

    expect(fn(obj)).to.equal(1);
  });
});
