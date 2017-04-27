const sanitizeTrend = (rawTimeline) => {
  return rawTimeline.default.timelineData.map((point) => {
    return {
      time: parseInt(point.time),
      formattedTime: point.formattedTime,
      formattedAxisTime: point.formattedAxisTime,
      value: point.value[0]
    };
  });
};

module.exports = sanitizeTrend;
