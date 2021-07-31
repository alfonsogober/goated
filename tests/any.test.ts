import { any } from "../dist/any";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.any()", () => {
  it("should return true when any elements are truthy", () => {
    expect(any([0, false, true])).to.equal(true);
  });

  it("should return false when no elements are truthy", () => {
    expect(any([NaN, 0, false])).to.equal(false);
  });
});
