import { F } from "../dist/F";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.F()", () => {
  it("should return false", () => {
    expect(F()).to.equal(false);
  });
});
