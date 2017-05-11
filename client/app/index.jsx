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
      loader: <Loader color="#26A65B" size="16px" margin="4px"/>,
      storyPoint: {}
    });
    axios.get('/api/timeline', {
      params: { q: trend }
    })
    .then(response => {
      let timeline = response.data;
      this.setState({
        trend: trend,
        start: timeline[0].date,
        end: timeline[timeline.length - 1].date,
        storyPoint: this.findStoryPoint(timeline),
        data: this.makeChartPoints(timeline),
        loader: false
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  makeChartPoints (timeline) {
    let dataTuple = [['Date', 'Popularity']];
    timeline.forEach(point => {
      dataTuple.push( [point.formattedAxisTime, point.popularity] );
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

