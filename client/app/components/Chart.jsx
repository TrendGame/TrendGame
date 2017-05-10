import React from 'react';
import { Chart } from 'react-google-charts';

export default class TrendChart extends React.Component {
  render () {
    let { data, trend, start, end } = this.props.chartData;
    return (
      <div>
        <Chart
          chartType="LineChart"
          data={data}
          options={{
            title: trend,
            hAxis: { title: 'Date', minValue: start, maxValue: end },
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
