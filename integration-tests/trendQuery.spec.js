// Packages
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

// Utility methods
var backDate = require('../utilities/backDate');
var sanitizeTrend = require('../utilities/sanitizeTrend');

// Fixtures
var trendRaw = require('./fixtures/trend-raw.json');
var trendSanitized = require('./fixtures/trend-sanitized');

describe('Backdate By Months', () => {
  it('should return a date 1 month before today', () => {
    var clock = sinon.useFakeTimers(new Date(2017, 0, 1));
    var actual = backDate(1);
    var expected = new Date(2016, 11, 1);
    expect(actual).to.deep.equal(expected);
    clock.restore();
  });
});

describe('Sanitize Google Trends results', () => {
  it('should convert JSON to formatted array', () => {
    var actual = sanitizeTrend(trendRaw);
    var expected = trendSanitized;
    expect(actual).to.deep.equal(expected);
  });
});
