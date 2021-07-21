import { when } from '../dist/when'

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('goated.when()', () => {

  it('should run second arg when predicate is true', () => {
    const isFoo = (input) => input === 'foo'
    const doBar = (input) => 'bar'

    const fn = when(isFoo, doBar)

    expect(fn('foo')).to.equal('bar')
  });

  it('should return input when predicate is false', () => {
    const isFoo = (input) => input !== 'foo'
    const doBar = (input) => 'bar'

    const fn = when(isFoo, doBar)

    expect(fn('foo')).to.equal('foo')
  });

});