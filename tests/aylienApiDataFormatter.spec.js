const chai = require('chai');

const inputData = require('./fixtures/stories-raw.js');
const storiesFormatted = require('./fixtures/stories-formatted');
const formatStories = require('../utilities/aylienApiDataFormatter');

const expect = chai.expect;

describe('Aylien API stories data formatter', function() {
  it('should format each story in the Aylien API story data', function() {
    const expected = storiesFormatted[0].stories;
    var actual = formatStories(JSON.stringify(inputData));

    expect(actual).to.eql(expected);
  });
});
