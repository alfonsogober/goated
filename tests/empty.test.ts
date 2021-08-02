import { empty } from "../dist/empty";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.empty()", () => {
  it("should return empty types", () => {
    expect(empty([1, 2, 3])).to.deep.equal([]);
    expect(empty("unicorns")).to.deep.equal("");
    expect(empty({ x: 1, y: 2 })).to.deep.equal({});
  });
});
