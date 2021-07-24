import { pathEq } from "../dist/pathEq";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.pathEq()", () => {
  it("should return true when path exists", () => {
    type Foo = { foo?: { bar?: number; baz: number } };
    const obj: Foo = { foo: { bar: 2, baz: 3 } };

    expect(pathEq<Foo>(["foo", "bar"], 2, obj)).to.equal(true);
  });

  it("should return (curried) false when it doesnt exist", () => {
    type Foo = { foo?: { bar?: number; baz: number } };
    const obj: Foo = { foo: { baz: 3 } };
    const isFooBar4 = <Curried<Foo, boolean>>pathEq<Foo>(["foo", "bar"], 4);

    expect(isFooBar4(obj)).to.equal(false);
  });
});
