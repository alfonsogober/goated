import { all } from "../dist/all";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.all()", () => {
  it("should return true when all elements are truthy", () => {
    expect(all([{}, 3, true])).to.equal(true);
  });

  it("should return false when all elements are not truthy", () => {
    expect(all([{}, 0, true])).to.equal(false);
  });

  it("async - should return Promise.all", async () => {
    expect(
      await all([
        Promise.resolve({}),
        Promise.resolve(3),
        Promise.resolve(true),
      ])
    ).to.deep.equal([{}, 3, true]);
  });
});
