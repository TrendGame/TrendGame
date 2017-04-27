const queryTrend = require('./trendQuery.js');
const findPeaks = require('./peakAlgo.js');
const getNews = require('./aylienApi');
const makeFinalData = require('./stitchData');

const makeTimeline = (searchString, callback) => {
  queryTrend(searchString, (timeSeries) => {
    const peaks = findPeaks(timeSeries);

    getNews(searchString, peaks, (peakStories) => {
      const timeline = makeFinalData(timeSeries, peakStories);

      callback(timeline);
    });
  });
};

module.exports = makeTimeline;
