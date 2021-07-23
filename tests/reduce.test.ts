import { reduce } from "../dist/reduce";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.reduce()", () => {
  it("should reduce array", () => {
    const array = [1, 2, 3];
    const add = (a, b) => a + b;

    expect(reduce<number, number>(add, 0, array)).to.equal(6);
  });

  it("should reduce object", () => {
    const obj = { foo: 1, bar: 2, baz: 3 };
    const add = (a, b) => a + b;

    expect(reduce<number, number>(add, 0, obj)).to.equal(6);
  });
});
