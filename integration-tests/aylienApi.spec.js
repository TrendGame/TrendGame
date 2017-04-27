var chai = require('chai');
var AylienNewsApi = require('aylien-news-api');

const getNews = require('../utilities/aylienApi.js');

const expect = chai.expect;
const apiInstance = new AylienNewsApi.DefaultApi();

try {
  const apiInfo = require('../lib/env/aylienApiKeys');

  let appId = apiInstance.apiClient.authentications['app_id'];
  appId.apiKey = apiInfo.id;

  let appKey = apiInstance.apiClient.authentications['app_key'];
  appKey.apiKey = apiInfo.key;
} catch (e) {
  console.log(e);
}


xdescribe('Aylien API', () => {

});
