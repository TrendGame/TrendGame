import React from 'react';
import {render} from 'react-dom';
import Layout from './components/Layout'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        ['Date', 'Popularity'],
        [0,0],
        [10,10],
        [20,20],
        [30,20],
        [40,50],
        [50,20],
        [60,60],
        [70,20],
        [80,40],
        [90,50],
        [100,60]
      ]
    };
  }
  render () {
    return (
        <Layout chartData = {this.state.data}/>
    );
  }
}

render(<App/>, document.getElementById('app'));

