import { omit } from "../dist/omit";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.omit()", () => {
  it("should omit object keys", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const obj: Foo = { foo: 1, bar: 2, baz: 3 };

    expect(omit<Foo>(["bar", "baz"], obj)).to.deep.equal({ foo: 1 });
  });

  it("should (curried) omit object keys", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const obj: Foo = { foo: 1, bar: 2, baz: 3 };

    const fn = <Curried<Foo, Partial<Foo>>>omit<Foo>(["bar", "baz"]);

    expect(fn(obj)).to.deep.equal({ foo: 1 });
  });
});
