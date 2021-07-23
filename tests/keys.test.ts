import { keys } from "../dist/keys";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.keys()", () => {
  it("should return object keys", () => {
    type Foo = { foo: number; bar: number; baz: number };
    const obj: Foo = { foo: 1, bar: 2, baz: 3 };

    expect(keys<Foo>(obj)).to.deep.equal(["foo", "bar", "baz"]);
  });
});
