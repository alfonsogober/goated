import { and } from "../dist/and";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.and()", () => {
  it("should return true when both values are truthy", () => {
    expect(and({}, [])).to.equal(true);
    expect(and(1, 2)).to.equal(true);
    expect(and(true, true)).to.equal(true);
  });

  it("should return false when one value is falsy", () => {
    expect(and({}, null)).to.equal(false);
    expect(and(1, NaN)).to.equal(false);
    expect(and(true, false)).to.equal(false);
  });
});
