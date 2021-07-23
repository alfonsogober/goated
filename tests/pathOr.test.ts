import { pathOr } from "../dist/pathOr";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.pathOr()", () => {
  it("should return specified path from object when it exists", () => {
    type Foo = { foo?: { bar?: number; baz: number } };
    const obj: Foo = { foo: { bar: 2, baz: 3 } };

    expect(pathOr<Foo>(4, ["foo", "bar"], obj)).to.equal(2);
  });

  it("should return default value when it doesnt exist", () => {
    type Foo = { foo?: { bar?: number; baz: number } };
    const obj: Foo = { foo: { baz: 3 } };

    expect(pathOr<Foo>(4, ["foo", "bar"], obj)).to.equal(4);
  });
});
