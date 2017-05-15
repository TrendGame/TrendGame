const queryTrend = require('./trendQuery.js');
const findPeaks = require('./peakAlgo.js');
const getNews = require('./aylienApi');
const makeFinalData = require('./stitchData');

const makeTimeline = (searchString, callback) => {
  queryTrend(searchString, (err, timeSeries) => {
    if (err) {
      callback(err, null);
    } else {
      const peaks = findPeaks(timeSeries);

      getNews(searchString, peaks, 'title', (err, peakStories) => {
        if (err) {
          callback(err, null);
        } else {
          const timeline = makeFinalData(timeSeries, peakStories);

          const response = {
            timeline: timeline,
            trend: searchString.slice(1, -1)
          };

          callback(null, response);
        }
      });
    }
  });
};

module.exports = makeTimeline;
