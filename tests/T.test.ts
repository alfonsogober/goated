import { T } from "../dist/T";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.T()", () => {
  it("should return true", () => {
    expect(T()).to.equal(true);
  });
});
