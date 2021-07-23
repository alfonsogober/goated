import { tail } from "../dist/tail";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.tail()", () => {
  it("should return all but the first element", () => {
    expect(tail<number>([1, 2, 3, 4, 5])).to.deep.equal([2, 3, 4, 5]);
  });
});
