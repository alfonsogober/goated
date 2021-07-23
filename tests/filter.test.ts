import { filter } from '../dist/filter'

import * as mocha from 'mocha';
import * as chai from 'chai';
import { Curried } from '../src/types';

const expect = chai.expect;

describe('goated.filter()', () => {

  it('should filter array' , () => {
    const array = [1, 2, 3]
    const onlyOdd = (item: number) => item % 2 === 1
    
    expect(filter<number>(onlyOdd, array)).to.deep.equal([1, 3]);
  });

  it('should filter object' , () => {
    const obj = { foo: 1, bar: 2, baz: 3 }
    const onlyOdd = (item: number) => item % 2 === 1
    
    expect(filter<number>(onlyOdd, obj)).to.deep.equal({ foo: 1, baz: 3 });
  });

  it('should (curried) filter' , () => {
    type Foo = { foo: number, bar: number; baz: number; }
    const obj = { foo: 1, bar: 2, baz: 3 }
    const onlyOdd = (item: number) => item % 2 === 1

    const fn = <Curried<Foo, number>>filter<number>(onlyOdd)
    
    expect(fn(obj)).to.deep.equal({ foo: 1, baz: 3 });
  });

});