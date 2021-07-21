import { pipe } from '../dist/pipe'
import { map } from '../dist/map'
import { reduce } from '../dist/reduce'

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('goated.pipe()', () => {

  it('should pipe unary functions', () => {
    const addThree = (num) => num + 3
    const negate = (num) => -num
    const addThreeThenNegate = pipe(addThree, negate)

    expect(addThreeThenNegate(3)).to.equal(-6)    
  });

  it('should pipe with a multiple arity function as first argument', () => {
    const negate = (num) => -num
    const powThenNegate = pipe(Math.pow, negate)

    expect(powThenNegate(3, 3)).to.equal(-27)    
  });

  it('should pipe with map and reduce', () => {
    const double = (num: number) => num * 2
    const add = (a, b) => a + b
    const doubleThenAdd = pipe(map(double), reduce(add, 0))

    expect(doubleThenAdd([1, 2, 3])).to.equal(12)    
  });

});