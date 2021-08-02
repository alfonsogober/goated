import { flip } from "../dist/flip";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.flip()", () => {
  it("should flip all arguments", () => {
    const mergeThree = (a, b, c) => [].concat(a, b, c);

    expect(flip(mergeThree)(1, 2, 3)).to.deep.equal([3, 2, 1]);
  });
});
