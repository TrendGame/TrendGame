var chai = require('chai');

var app = require('../server.js');
var findPeak = require('../utilities/peakAlgo');
var dummyData = require('./fixtures/trend-sanitized');

var expect = chai.expect;

describe('Peak Algo', () => {
  it('should return peak value and associated date as a tuple in an array', () => {
    var expected = [[1464480000, 100]];
    var actual = findPeak(dummyData);

    expect(actual).to.eql(expected);
  });
});
