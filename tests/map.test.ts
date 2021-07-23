import { map } from '../dist/map'

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('goated.map()', () => {

  it('should map array' , () => {
    const array = [1, 2, 3]
    const double = (item: number) => item * 2
    
    expect(map<number, number>(double, array)).to.deep.equal([2, 4, 6]);
  });

  it('should map object' , () => {
    const obj = { 'foo': 1, 'bar': 2, 'baz': 3 }
    const double = (item: number) => item * 2
    
    expect(map<number, number>(double, obj)).to.deep.equal({ 'foo': 2, 'bar': 4, 'baz': 6 });
  });

});