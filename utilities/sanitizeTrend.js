module.exports = (rawTimeline) => {
  let parsedTimeline = {};

  try {
    parsedTimeline = JSON.parse(rawTimeline);
  } catch (error) {
    throw error;
  }

  return parsedTimeline.default.timelineData.map((point) => {
    return {
      time: parseInt(point.time),
      formattedTime: point.formattedTime,
      formattedAxisTime: point.formattedAxisTime,
      value: point.value[0]
    };
  });
};
