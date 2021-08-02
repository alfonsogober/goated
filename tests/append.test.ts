import { append } from "../dist/append";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.append()", () => {
  it("should append both args", () => {
    expect(append("Typescript", ["Write", "More"])).to.deep.equal([
      "Write",
      "More",
      "Typescript",
    ]);
  });

  it("should append curried", () => {
    const appendTS = <Curried<string[], string[]>>append("Typescript");
    expect(appendTS(["Write", "More"])).to.deep.equal([
      "Write",
      "More",
      "Typescript",
    ]);
  });
});
