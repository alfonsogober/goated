import { isNil } from "../dist/isNil";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.isNil()", () => {
  it("should return true when input is null or undefined", () => {
    expect(isNil(null)).to.equal(true);
    expect(isNil(undefined)).to.equal(true);
    expect(isNil(NaN)).to.equal(true);
  });

  it("should return false when input is not null or undefined", () => {
    expect(isNil(0)).to.equal(false);
    expect(isNil([])).to.equal(false);
  });
});
