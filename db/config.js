var serverUrl = '127.0.0.1';
var connection = {
  host: serverUrl,
  user: 'root',
  password: '',
  charset: 'uft8'
};
var knex = require('knex')({
  client: 'mysql',
  connection: connection,
  useNullAsDefault: true
});
knex.raw('CREATE DATABASE IF NOT EXISTS trendNewsDB')
  .then(function() {
    knex.destroy();
  });
connection.database = 'trendNewsDB';
knex = require('knex')({ client: 'mysql', connection: connection });
var db = require('bookshelf')(knex);
db.knex.schema.hasTable('trends').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('trends', function(trend) {
      trend.increments('id').primary();
      trend.string('name');
      trend.timestamps();
      console.log('created Table trends');
    }).createTable('weeks', function(week) {
      week.increments('id').primary();
      week.string('startDate');
      week.integer('intensity');
      week.integer('trendId').references('trends.id');
      console.log('created Table weeks');
    }).createTable('stories', function(story) {
      story.increments('id').primary();
      story.string('articleName', 500);
      story.string('mediaUrl', 200);
      story.string('url', 500);
      story.string('previewText', 1000);
      story.interger('weeksId').references('weeks.id');
      console.log('created Table stories');
    });
  }
});

module.exports = db;