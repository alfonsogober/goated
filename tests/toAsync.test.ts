import { toAsync } from "../dist/toAsync";
import { all } from "../dist/all";

import * as mocha from "mocha";
import * as chai from "chai";
import { map } from "../src/map";

const expect = chai.expect;

describe("goated.toAsync()", () => {
  it("should convert method to async", async () => {
    const array = [1, 2, 3];
    const double = (item: number) => item * 2;
    const doubleAsync = toAsync(double);

    expect(await all(<Promise<number>[]>map(doubleAsync, array))).to.deep.equal(
      [2, 4, 6]
    );
  });
});
