const findPeaks = function(timeSeries) {
  let peaks = [[0, -1]];

  timeSeries.forEach((data) => {
    if (data.popularity > peaks[0][1]) {
      peaks.length = 0;
      peaks.push([data.date, data.popularity]);
    }
  });

  return peaks;
};

module.exports = findPeaks;
