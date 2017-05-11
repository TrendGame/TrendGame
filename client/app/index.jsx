import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import Layout from './components/Layout';
// Fixture scaffolding for history components
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
      history: historyList
    };
    this.collectData = this.collectData.bind(this);
  }

  collectData(trend) {
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
        data: this.makeChartPoints(timeline)
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

