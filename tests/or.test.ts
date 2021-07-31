import { or } from "../dist/or";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.and()", () => {
  it("should return true when one value is truthy", () => {
    expect(or({}, null)).to.equal(true);
    expect(or(1, NaN)).to.equal(true);
    expect(or(true, false)).to.equal(true);
  });

  it("should return false when both values are falsy", () => {
    expect(or(undefined, null)).to.equal(false);
    expect(or(0, NaN)).to.equal(false);
    expect(or(false, false)).to.equal(false);
  });
});
