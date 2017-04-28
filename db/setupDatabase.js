//set up the database if not exist
var serverUrl = '127.0.0.1';
var connection = {
  host: serverUrl,
  user: 'root',
  password: '',
  charset: 'utf8'
};
var knex = require('knex')({
  client: 'mysql',
  connection: connection,
  useNullAsDefault: true
});
knex.raw('CREATE DATABASE IF NOT EXISTS trendNewsDB')
  .then(function () {
    connection.database = 'trendNewsDB';
    knex = require('knex')({ client: 'mysql', connection: connection });
  }).catch(function (err) {
    console.log(err);
  });
connection.database = 'trendNewsDB';
knex = require('knex')({ client: 'mysql', connection: connection });
module.exports = knex;
