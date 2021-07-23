import { always } from "../dist/always";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.always()", () => {
  it("should return a function that always returns what was supplied", () => {
    const alwaysOne = always(1);
    expect(alwaysOne()).to.equal(1);
  });
});
