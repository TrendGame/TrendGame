import React from 'react';
import {render} from 'react-dom';
import data from './dummyData';
import Layout from './components/Layout'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      start: "",
      end: "",
      trend: ""
    };
    this.collectData = this.collectData.bind(this);
  }

  collectData(trend){
    this.setState({trend: trend});
    var dataTuple = [];
    dataTuple.push(['Date', 'Popularity'])
    for(var i = 0; i < data.length; i++){
      dataTuple.push( [data[i].date, data[i].popularity] );
      if(i === 0){
        this.setState({start : data[i].date})
      }
      if(i === data.length-1){
        this.setState({end : data[i].date})
      }
    }
    this.setState({data: dataTuple});
    console.log(this.state.start, this.state.end, this.state.data);

    console.log(trend);
  }

  render () {
    return (
        <Layout chartData={this.state.data} trend={this.state.trend} start={this.state.start} end={this.state.end} collectData={this.collectData}/>
    );
  }
}

render(<App/>, document.getElementById('app'));

