import { pick } from "../dist/pick";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.pick()", () => {
  it("should pick object keys", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const obj: Foo = { foo: 1, bar: 2, baz: 3 };

    expect(pick<Foo>(["foo", "baz"], obj)).to.deep.equal({ foo: 1, baz: 3 });
  });

  it("should (curried) pick object keys", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const obj: Foo = { foo: 1, bar: 2, baz: 3 };

    const fn = <Curried<Foo, Partial<Foo>>>pick<Foo>(["foo", "baz"]);

    expect(fn(obj)).to.deep.equal({ foo: 1, baz: 3 });
  });
});
