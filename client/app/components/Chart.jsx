import React from 'react';
import { Chart } from 'react-google-charts';

const TrendChart = ({chartData}) => {
  let displayChart;
  let { data, trend, start, end, loader } = chartData;
  if (data.length === 0 || loader !== false) {
    displayChart = loader;
  } else {
    displayChart = (
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
          graph_id="LineChart"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>);
  }
  return (displayChart);
};

export default TrendChart;
