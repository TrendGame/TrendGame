const pg = require('pg');

const url = process.env.DATABASE_URL;

if (url) {
  var knex = require('knex')({
    client: 'pg',
    connection: url + '?ssl=true'
  });
} else {
  const localConnection = require('./dbLocalConnection');

  var knex = require('knex')({
    client: 'pg',
    connection: localConnection
  });
}

module.exports = knex;
