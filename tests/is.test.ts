import { is } from "../dist/is";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.is()", () => {
  it("should detect types", () => {
    expect(is(Object, {})).to.equal(true)
    expect(is(Number, 1)).to.equal(true)
    expect(is(Object, 1)).to.equal(false)
    expect(is(String, 's')).to.equal(true)
    expect(is(String, new String(''))).to.equal(true)
    expect(is(Object, new String(''))).to.equal(true)
    expect(is(Object, 's')).to.equal(false)
    expect(is(Number, {})).to.equal(false)
  });
});