import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import Layout from './components/Layout';
var Loader = require('halogen/PulseLoader');

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
      history: []
    };
    this.collectData = this.collectData.bind(this);
  }

  componentDidMount() {
    this.getSearchHistory();
  }

  collectData(trend) {
    this.setState({
      loader: <div className="text-center"><Loader color="#0275d8" size="16px" margin="4px"/></div>,
      storyPoint: {}
    });
    axios.get('/api/timeline', {
      params: { q: trend }
    })
    .then(response => {
      let timeline = response.data.timeline;
      let trendCapitalized = response.data.trend[0].toUpperCase() + response.data.trend.slice(1);
      this.setState({
        trend: trendCapitalized,
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
    let dataTuple = [['Date', 'Popularity', {'type': 'string', 'role': 'style'}]];
    timeline.forEach( point => {
      if (point.stories) {
        dataTuple.push( [new Date(point.date * 1000), point.popularity, 'point { size: 6; shape-type: diamond; visible: true; }'] );
      } else {
        dataTuple.push( [new Date(point.date * 1000), point.popularity, null] );
      }
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

