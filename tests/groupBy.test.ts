import { groupBy } from "../dist/groupBy";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("goated.groupBy()", () => {
  it("should group by function selector", () => {
    const grouper = groupBy<{ a: string }>((item) => {
      if (item.a === "b") return "foo";
      else return "bar";
    });

    expect(grouper([{ a: "b" }, { a: "d" }])).to.deep.equal({
      foo: [{ a: "b" }],
      bar: [{ a: "d" }],
    });
  });

  it("should group by string selector", () => {
    const grouper = groupBy<{ a: string }>("a");

    expect(grouper([{ a: "b" }, { a: "d" }])).to.deep.equal({
      b: [{ a: "b" }],
      d: [{ a: "d" }],
    });
  });
});
