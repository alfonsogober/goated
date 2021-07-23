import { not } from "../dist/not";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.not()", () => {
  it("should return the opposite of what was supplied", () => {
    expect(not(true)).to.equal(false);
    expect(not(0)).to.equal(true);
  });
});
