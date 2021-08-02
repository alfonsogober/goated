import { multiply } from "../dist/multiply";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.multiply()", () => {
  it("should multiply two numbers", () => {
    expect(multiply(2, 2)).to.equal(4);
  });

  it("should return a function that multiplies two numbers", () => {
    const double = <Curried<number, number>>multiply(2);

    expect(double(2)).to.equal(4);
  });
});
