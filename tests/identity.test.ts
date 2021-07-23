import { identity } from '../dist/identity'

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('goated.identity()', () => {

  it('should return what was supplied', () => {
    expect(identity(1)).to.equal(1)
  });

});