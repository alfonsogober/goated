import { values } from '../dist/values'

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('goated.values()', () => {

  it('should return the values of the given object', () => {
    type Foo = { foo: number; bar: number; baz: number; }
    const obj: Foo = { foo: 1, bar: 2, baz: 3 }
    expect(values<Foo>(obj)).to.deep.equal([1, 2, 3])
  });

});