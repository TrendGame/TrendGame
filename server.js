const makeTimeline = require('./utilities/makeTimeline');
const queries = require('./db/queries');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const IP = '127.0.0.1';
const PORT = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/client/public'));
app.use(bodyParser.json());
app.use(morgan('tiny'));

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Listening on ${IP}:${PORT}`);
  });
}

app.get('/api', (req, res) => {
  res.send({
    version: '0.0.1'
  });
});

app.get('/api/timeline', (req, res) => {
  makeTimeline(req.query.q, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/history', (req, res) => {
  queries.insertSearch(req.body.search, (err, resp) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(resp);
    }
  });
});

app.get('/api/history', (req, res) => {
  queries.getSearches(10, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = { status: 404 };
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
