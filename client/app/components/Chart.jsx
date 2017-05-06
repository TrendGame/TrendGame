import React from 'react';
import { Chart } from 'react-google-charts'

export default class TrendChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
      options: {
        title: 'Trend Popularity Graph',
        hAxis: { title: 'Date', minValue: 0, maxValue: 100 },
        vAxis: { title: 'Popularity', minValue: 0, maxValue: 100 },
        legend: 'none'
      },

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
      <div>
        <Chart
          chartType="LineChart"
          data = {this.state.data}
          options = {this.state.options}
          graph_id = "LineChart"
          width = "100%"
          height = "400px"
          legend_toggle
        />
        <h1>hi</h1>
      </div>
    );
  }
}
