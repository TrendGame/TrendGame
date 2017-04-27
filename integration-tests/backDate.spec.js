var chai = require('chai');
var sinon = require('sinon');
var backDate = require('../utilities/backDate');

var expect = chai.expect;

describe('Backdate By Months', () => {
  it('should return a date 1 month before today', () => {
    var clock = sinon.useFakeTimers(new Date(2017, 0, 1));
    var actual = backDate(1);
    var expected = new Date(2016, 11, 1);
    expect(actual).to.deep.equal(expected);
    clock.restore();
  })
})
