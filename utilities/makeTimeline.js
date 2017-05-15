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

        } else if (peakStories[0].stories[0] === undefined) {
          getNews(searchString, peaks, 'body', (err, peakStories) => {

            if (err) {
              callback(err, null);
            } else {
              const response = makeFinalData(timeSeries, peakStories, searchString);
              callback(null, response);
            }
          });

        } else {
          const response = makeFinalData(timeSeries, peakStories, searchString);
          callback(null, response);
        }
      });
    }
  });
};

module.exports = makeTimeline;
