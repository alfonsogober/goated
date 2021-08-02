import { divideBy } from "../dist/divideBy";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.divideBy()", () => {
  it("should divideBy two numbers", () => {
    expect(divideBy(2, 6)).to.equal(3);
  });

  it("should return a function that divideBys two numbers", () => {
    const divideBytwo = <Curried<number, number>>divideBy(2);

    expect(divideBytwo(6)).to.equal(3);
  });
});
