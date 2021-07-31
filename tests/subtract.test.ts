import { subtract } from "../dist/subtract";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.subtract()", () => {
  it("should subtract two numbers", () => {
    expect(subtract(2, 1)).to.equal(1);
  });

  it("should return a function that subtracts two numbers", () => {
    const subtractTwo = <Curried<number, number>>subtract(2);

    expect(subtractTwo(1)).to.equal(1);
  });
});
