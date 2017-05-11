import React from 'react';
import { Chart } from 'react-google-charts';

const TrendChart = ({chartData}) => {
    let displayChart;
    let { data, trend, start, end } = chartData;
    if( data.length === 0 ){
      displayChart = <div>No Chart Data to Display.</div>
    }else{
      displayChart = (
       <div>
        <Chart
          chartType="LineChart"
          data = {data}
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
      </div>);
    }
    return (displayChart);
};

export default TrendChart;