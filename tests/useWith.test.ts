import { useWith } from '../dist/useWith'
import { identity } from '../dist/identity'

import * as mocha from 'mocha';
import * as chai from 'chai';
import * as spies from 'chai-spies'
import { Curried } from '../src/types';

chai.use(spies)
const expect = chai.expect;

describe('goated.useWith()', () => {

  it('should work with all arguments supplied', () => {
    const fn = useWith<number, number>(Math.pow, [identity, identity]);

    expect(fn(3, 4)).to.equal(81)
  });

  it('should work with not all arguments supplied', () => {
    const fn = useWith<number, Curried<number, number>>(Math.pow, [identity, identity]);

    const fn3 = fn(3)

    expect(fn3(4)).to.equal(81)
  });

  it('should pass surplus args directly to fn', () => {
    const spy = chai.spy.on(Math, 'pow');
    const fn = useWith<number, Curried<number, number>>(Math.pow, [identity, identity]);

    const fn3 = fn(3)

    expect(fn3(4, 5)).to.equal(81)
    expect(Math.pow).to.have.been.called.with(3, 4, 5)
  });

});