import { head } from "../dist/head";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.head()", () => {
  it("should return the first element", () => {
    expect(head<number>([1, 2, 3, 4, 5])).to.equal(1);
  });
});
