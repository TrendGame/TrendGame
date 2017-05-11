var db = require('./config');
const findUnique = require('../utilities/findUnique');

const insertSearch = (searchString, callback) => {
  db('trends').insert({name: searchString}).then((resp) => {
    callback(null, resp);
  }).catch((err) => {
    callback(err, null);
  });
};

const getSearches = (numberOfSearches, callback) => {
  db.select('name').from('trends').then((data) => {
    let dataNoDups = findUnique(data);
    let dataSlice = dataNoDups.slice(0, numberOfSearches);
    let dataClean = dataSlice.map((search) => {
      return search.name;
    });
    callback(null, dataClean);
  }).catch((err) => {
    callback(err, null);
  });
};

module.exports.insertSearch = insertSearch;
module.exports.getSearches = getSearches;
