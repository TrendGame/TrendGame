var db = require('./config');

const insertSearch = (searchString, callback) => {
  db('trends').insert({name: searchString}).then((resp) => {
    callback(null, resp);
  }).catch((err) => {
    callback(err, null);
  });
};

const getSearches = (numberOfSearches, callback) => {
  db.select('name').from('trends').then((data) => {
    console.log(numberOfSearches);
    let dataSlice = data.slice(numberOfSearches * -1);
    let dataClean = dataSlice.map((search) => {
      return search.name;
    });
    callback(null, dataClean);
  }).catch((err) => {
    callback(err, null);
  });
};
