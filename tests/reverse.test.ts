import { reverse } from "../dist/reverse";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.reverse()", () => {
  it("should reverse array", () => {
    expect(reverse([1, 2, 3])).to.deep.equal([3, 2, 1]);
  });
});
