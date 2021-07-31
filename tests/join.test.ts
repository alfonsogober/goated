import { join } from "../dist/join";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.join()", () => {
  it("should join both args", () => {
    expect(join(" ", ["Write", "More", "Typescript"])).to.deep.equal(
      "Write More Typescript"
    );
  });

  it("should join curried", () => {
    const joinSpaces = <Curried<string[], string>>join(" ");
    expect(joinSpaces(["Write", "More", "Typescript"])).to.deep.equal(
      "Write More Typescript"
    );
  });
});
