import { split } from "../dist/split";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.split()", () => {
  it("should split both args", () => {
    expect(split(" ", "Write More Typescript")).to.deep.equal([
      "Write",
      "More",
      "Typescript",
    ]);
  });

  it("should split curried", () => {
    const splitSpaces = <Curried<string, string[]>>split(" ");
    expect(splitSpaces("Write More Typescript")).to.deep.equal([
      "Write",
      "More",
      "Typescript",
    ]);
  });
});
