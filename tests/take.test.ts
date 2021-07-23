import { take } from "../dist/take";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.take()", () => {
  it("should return the first n elements", () => {
    expect(take<number>(2, [1, 2, 3, 4, 5])).to.deep.equal([1, 2]);
  });

  it("should return the (curried) first n elements", () => {
    const takeFirstTwo = <Curried<number[], number[]>>take<number>(2);

    expect(takeFirstTwo([1, 2, 3, 4, 5])).to.deep.equal([1, 2]);
  });
});
