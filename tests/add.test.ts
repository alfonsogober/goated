import { add } from "../dist/add";

import * as mocha from "mocha";
import * as chai from "chai";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.add()", () => {
  it("should add two numbers", () => {
    expect(add(1, 1)).to.equal(2);
  });

  it("should return a function that adds two numbers", () => {
    const addOne = <Curried<number, number>>add(1);

    expect(addOne(1)).to.equal(2);
  });
});
