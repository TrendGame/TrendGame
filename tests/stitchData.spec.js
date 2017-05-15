const chai = require('chai');
const expect = chai.expect;

const stitchTimeline = require('../utilities/stitchData');
const trends = require('./fixtures/trend-sanitized');
const stories = require('./fixtures/stories-formatted');
const timeline = require('./fixtures/stitched-timeline');

describe('Stitching timeline to make final data', function() {
  it('should merge trend query and news data on matching dates', function() {
    const expected = timeline;
    const actual = stitchTimeline(trends, stories, '"clinton"');
    expect(actual).to.deep.equal(expected);
  });
});
