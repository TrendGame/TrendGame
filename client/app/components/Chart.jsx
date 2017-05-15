import React from 'react';
import { Chart } from 'react-google-charts';

const TrendChart = ({ chartData, storyPoint }) => {
  let displayChart;
  let { data, trend, start, end, loader } = chartData;
  if (data.length === 0 || loader !== false) {
    displayChart = loader;
  } else {
    displayChart = (
      <span>
        <h2 className="h4 mb-4">
          <strong>When</strong> did interest in <strong className="text-lowercase">{trend}</strong> peak? <strong>{storyPoint.formattedAxisTime}</strong>
        </h2>
        <Chart
          chartType="LineChart"
          data={data}
          options={{
            hAxis: { title: null, minValue: new Date(start * 1000), maxValue: new Date(end * 1000), gridlines: { color: 'none' } },
            vAxis: { title: null, minValue: 0, maxValue: 100 },
            chartArea: { width: '90%', height: '80%' },
            legend: 'none',
            series: {
              0: { color: '#dc3c3c' }
            },
            lineWidth: 3
          }}
          graph_id="LineChart"
          width="100%"
          height="400px"
          legend_toggle
        />
      </span>
    );
  }
  return (
    <div className="row mb-5">
      <div className="col">
        {displayChart}
      </div>
    </div>
  );
};

export default TrendChart;
