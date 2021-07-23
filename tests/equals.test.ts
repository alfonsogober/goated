import { equals } from '../dist/equals'

import * as mocha from 'mocha';
import * as chai from 'chai';
import { Curried } from '../src/types';

const expect = chai.expect;

describe('goated.equals()', () => {

  it('should check primitive equality', () => {
    expect(equals(1, 1)).to.equal(true)
    expect(equals(1, '1' as unknown as number)).to.equal(false) // hopefully nobody ever does this but you're covered just in case
  });

  it('should check complex and recursive object equality', () => {
    expect(equals([1, 2, 3], [1, 2, 3])).to.equal(true)

    type Foo = { v?: Foo }
    const a: Foo = {}; a.v = a;
    const b: Foo = {}; b.v = b;
    expect(equals(a, b)).to.equal(true)
  })

  it('should (curried) check for equality' , () => {
    type Foo = { foo: number, bar: number; baz: number; }
    const obj = { foo: 1, bar: 2, baz: 3 }
    const obj1 = { foo: 1, bar: 2, baz: 3 }

    const equalsObj = <Curried<Foo, boolean>>equals<Foo>(obj)
    
    expect(equalsObj(obj1)).to.equal(true)
  });

});