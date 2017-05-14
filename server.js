const makeTimeline = require('./utilities/makeTimeline');
const queries = require('./db/queries');
const cleanData = require('./utilities/cleanSearch');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const IP = '127.0.0.1';
const PORT = process.env.PORT || 8080;

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
  let trend = req.query.q;
  trend = cleanData.prepForAylien(trend);

  makeTimeline(trend, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/history', (req, res) => {
  let trend = req.body.search;

  if (cleanData.checkIsReadyForDb(trend)) {
    trend = cleanData.prepForDb(trend);

    queries.insertSearch(trend, (err, resp) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(resp);
      }
    });
  } else {
    res.status(400).send();
  }
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

app.use((req, res) => {
  res.status(404);
  res.sendFile(__dirname + '/client/public/404.html');
});
module.exports = app;
