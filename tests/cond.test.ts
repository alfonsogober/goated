import { cond } from "../dist/cond";

import * as mocha from "mocha";
import * as chai from "chai";
import { equals } from "../src/equals";
import { always } from "../src/always";
import { T } from "../src/T";
import { Curried } from "../src/types";

const expect = chai.expect;

describe("goated.cond()", () => {
  it("should execute conditions", () => {
    const fn = cond([
      [<Curried<number, boolean>>equals(0), always("water freezes at 0°C")],
      [<Curried<number, boolean>>equals(100), always("water boils at 100°C")],
      [T, (temp) => "nothing special happens at " + temp + "°C"],
    ]);
    expect(fn(0)).to.equal("water freezes at 0°C");
    expect(fn(50)).to.equal("nothing special happens at 50°C");
    expect(fn(100)).to.equal("water boils at 100°C");
  });

  it("should return undefined when none of the predicates match", () => {
    const fn = cond([
      [<Curried<number, boolean>>equals(0), always("water freezes at 0°C")],
      [<Curried<number, boolean>>equals(100), always("water boils at 100°C")],
    ]);
    expect(fn(50)).to.equal(undefined);
  });
});
