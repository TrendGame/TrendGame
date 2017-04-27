const googleTrends = require('google-trends-api');
const backDateByMonth = require('./backDate');

const trendQuery = (keyword, callback) => {
  const options = {
    keyword: keyword,
    startTime: backDateByMonth(15),
  };

  googleTrends.interestOverTime(options)
  .then((results) => {
    callback(results);
  })
  .catch((err) => {
    console.error('Error getting trends:', err);
  });
};

module.exports = trendQuery;
