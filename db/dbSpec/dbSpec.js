var expect = require('chai').expect;
var app = require('./sudoAppForTest');
var db = request('../config.js');

describe('test for Database', function() {
  var server;
  server = app.listen(3000, function() {
    console.log('DB test server is listening on 3000');
  });
  it('Should have tables named stories/trends/weeks', function(done) {

    db.knex('stories')
      .where('')
  });

  server.close();
  console.log('DB test server colsed');

});