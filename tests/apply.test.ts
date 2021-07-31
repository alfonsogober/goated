import { apply } from "../dist/apply";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.apply()", () => {
  it("should apply args to function", () => {
    const nums = [1, 2, 3, -99, 42, 6, 7];
    expect(apply(Math.max, nums)).to.equal(42);
  });

  it("should (curried) apply args to function", () => {
    const nums = [1, 2, 3, -99, 42, 6, 7];
    const getMax = apply(Math.max)
    expect(getMax(nums)).to.equal(42);
  });
});