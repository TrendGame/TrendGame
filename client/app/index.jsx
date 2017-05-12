import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import Layout from './components/Layout';
var Loader = require('halogen/PulseLoader');
import historyList from '../../tests/fixtures/history';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      start: '',
      end: '',
      trend: '',
      storyPoint: {},
      loader: false,
      history: historyList
    };
    this.collectData = this.collectData.bind(this);
  }

  componentDidMount() {
    this.getSearchHistory();
  }

  collectData(trend) {
    this.setState({
      loader: <Loader color="#0275d8" size="16px" margin="4px"/>,
      storyPoint: {}
    });
    axios.get('/api/timeline', {
      params: { q: trend }
    })
    .then(response => {
      let timeline = response.data.timeline;
      this.setState({
        trend: response.data.trend,
        start: timeline[0].date,
        end: timeline[timeline.length - 1].date,
        storyPoint: this.findStoryPoint(timeline),
        data: this.makeChartPoints(timeline),
        loader: false
      });
      return this.postSearchHistory(trend);
    })
    .catch(error => {
      console.error(error);
    });
  }

  makeChartPoints (timeline) {
    let dataTuple = [['Date', 'Popularity']];
    timeline.forEach(point => {
      dataTuple.push( [new Date(point.date * 1000), point.popularity] );
    });
    return dataTuple;
  }

  findStoryPoint (timeline) {
    for (let point of timeline) {
      if ('stories' in point) {
        return point;
      }
    }
  }

  getSearchHistory() {
    axios.get('/api/history')
    .then(response => {
      this.setState({
        history: response.data
      });
    });
  }

  postSearchHistory(trend) {
    axios.post('/api/history', {
      search: trend
    }).then(response => {
      this.getSearchHistory();
    }).catch(err => {
      console.log(err);
    });
  }

  render () {
    return (
      <Layout
        chartData={this.state}
        collectData={this.collectData}
        storyPoint={this.state.storyPoint}
        history={this.state.history}
      />
    );
  }
}

render(<App/>, document.getElementById('app'));

