import React from 'react';
import { Chart } from 'react-google-charts';

const TrendChart = ({ chartData, storyPoint }) => {
  let displayChart;
  console.log('THIS IS THE CHART DATA', chartData);
  let { data, trend, start, end, loader } = chartData;
  if (data.length === 0 || loader !== false) {
    displayChart = loader;
  } else {
    displayChart = (
      <Chart
        chartType="LineChart"
        data={data}
        options={{
          title: `${trend} popularity peaked at ${storyPoint.formattedAxisTime}`,
          hAxis: {
            title: null,
            minValue: new Date(start * 1000),
            maxValue: new Date(end * 1000)
          },
          vAxis: { title: null, minValue: 0, maxValue: 100 },
          legend: 'none'
        }}
        graph_id="LineChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    );
  }
  return (
    <div className="row mb-5">
      <div className="col-12 text-center">
        {displayChart}
      </div>
    </div>
  );
};

export default TrendChart;
