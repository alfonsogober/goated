import { propOr } from "../dist/propOr";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.propOr()", () => {
  it("should return specified property from object when it exists", () => {
    type Foo = { foo?: number; bar: number; baz: number };
    const obj: Foo = { foo: 1, bar: 2, baz: 3 };

    expect(propOr<Foo>(4, "foo", obj)).to.equal(1);
  });

  it("should return default value when it doesnt exist", () => {
    type Foo = { foo?: number; bar: number; baz: number };
    const obj: Foo = { bar: 2, baz: 3 };

    expect(propOr<Foo>(4, "foo", obj)).to.equal(4);
  });
});
