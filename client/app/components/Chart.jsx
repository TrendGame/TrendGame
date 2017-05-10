import React from 'react';
import { Chart } from 'react-google-charts'

export default class TrendChart extends React.Component {
  constructor(props){
    super(props);

  }
  render () {
    return (
      <div>
        <Chart
          chartType="LineChart"
          data = {this.props.chartData}
          options = {{
            title: this.props.trend,
            hAxis: { title: 'Date', minValue: this.props.start, maxValue: this.props.end },
            vAxis: { title: 'Popularity', minValue: 0, maxValue: 100 },
            legend: 'none'
          }}
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
