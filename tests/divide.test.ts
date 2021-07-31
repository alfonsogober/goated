import { divide } from "../dist/divide";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.divide()", () => {
  it("should divide two numbers", () => {
    expect(divide(6, 2)).to.equal(3);
  });

  it("should return a function that divides two numbers", () => {
    const divideSixBy = <Curried<number, number>>divide(6);

    expect(divideSixBy(2)).to.equal(3);
  });
});
