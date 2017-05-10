import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import data from '../../integration-tests/fixtures/stitched-timeline';
import Layout from './components/Layout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      start: '',
      end: '',
      trend: ''
    };
    this.collectData = this.collectData.bind(this);
  }

  collectData(trend) {
    this.setState({trend: trend});
    axios.get('/api/timeline', {
      params: {
        q: trend
      }
     })
    .then( response => {
      console.log("This is the reponse!", response.data);
      var dataTuple = [];
      dataTuple.push(['Date', 'Popularity']);
      for (var i = 0; i < response.data.length; i++) {
        dataTuple.push( [response.data[i].date, response.data[i].popularity] );
        if (i === 0) {
          this.setState({start: response.data[i].date});
        }
        if (i === response.data.length - 1) {
          this.setState({end: response.data[i].date});
        }
      }
      console.log("This is the dataTuple", dataTuple);
      this.setState({data: dataTuple});
      console.log(this.state.start, this.state.end, this.state.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(trend);
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
          storyPoint={this.findStoryPoint(data)}
        />
    );
  }
}

render(<App/>, document.getElementById('app'));

