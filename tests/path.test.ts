import { path } from "../dist/path";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.path()", () => {
  it("should return specified path from object", () => {
    type Foo = { foo: { bar: number; baz: number } };
    const obj: Foo = { foo: { bar: 2, baz: 3 } };

    expect(path<Foo>(["foo", "bar"], obj)).to.equal(2);
  });

  it("should (curried) return specified path from object", () => {
    type Foo = { foo: { bar: number; baz: number } };
    const obj: Foo = { foo: { bar: 3, baz: 4 } };

    const getFooBar = path<Foo>(["foo", "bar"]);

    expect(getFooBar(obj)).to.equal(3);
  });
});
