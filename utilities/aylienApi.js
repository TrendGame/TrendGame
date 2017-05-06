const AylienNewsApi = require('aylien-news-api');
const epoch = require('epoch.js');

const formatStories = require('./aylienApiDataFormatter');

const getStories = (queryString, peaks, callback) => {

  // Format date query for API
  // 604800000 is 1 week in milliseconds
  const peakDate = new Date(peaks[0][0] * 1000);
  const peakEndDate = new Date(peaks[0][0] * 1000 + 604800000);
  let formattedPeakDate = epoch(peakDate).format('YYYY[-]MM[-]DD[T]hh[:]mm[:]ss[Z]');
  let formattedPeakEndDate = epoch(peakEndDate).format('YYYY[-]MM[-]DD[T]hh[:]mm[:]ss[Z]');

  // Establish API instance and supply credentials
  const apiInstance = new AylienNewsApi.DefaultApi();

  let apiInfo;
  try {
    apiInfo = require('../lib/env/aylienApiKeys');
  } catch (e) {
    apiInfo = {};
  }

  let appId = apiInstance.apiClient.authentications['app_id'];
  try {
    appId.apiKey = AYLIEN_ID;
  } catch (e) {
    appId.apiKey = apiInfo.id;
  }

  let appKey = apiInstance.apiClient.authentications['app_key'];
  try {
    appKey.apiKey = AYLIEN_KEY;
  } catch (e) {
    appKey.apiKey = apiInfo.key;
  }

  // Assign options for API query
  const opts = {
    'title': queryString,
    'sortBy': 'source.links_in_count',
    'language': ['en'],
    'publishedAtStart': formattedPeakDate,
    'publishedAtEnd': formattedPeakEndDate,
  };

  apiInstance.listStories(opts, (error, data, response) => {
    if (error) {
      callback(error, null);
    } else {
      // 4 chosen so we display 4 stories under the graph.  Not ideal to have this hard coded here, but MVP!
      // Ideally we only query for 4, but I haven't been able to find a limit query parameter.
      data.stories.length = 4;
      const formattedStories = formatStories(data);
      let finalData = [];
      finalData.push({
        date: peakDate,
        stories: formattedStories
      });

      callback(null, finalData);
    }
  });
};

module.exports = getStories;
