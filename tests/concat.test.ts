import { concat } from "../dist/concat";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried, Semigroup } from "../src/types";

const expect = chai.expect;

describe("goated.concat()", () => {
  it("should concatenate two arrays", () => {
    expect(concat([1, 2], [3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should (curried) concatenate two arrays", () => {
    const concatOneTwo = <Curried<Semigroup<number>, Semigroup<number>>>(
      concat([1, 2])
    );

    expect(concatOneTwo([3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should concatenate n arrays", () => {
    expect(concat([1, 2], [3, 4, 5], [6, 7, 8, 9])).to.deep.equal([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });
});
