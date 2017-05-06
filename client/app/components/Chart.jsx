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
    };
  }
  render () {
    return (
      <div>
        <Chart
          chartType="LineChart"
          data = {this.props.chartData}
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
