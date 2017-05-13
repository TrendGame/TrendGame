module.exports = (timeline, stories) => {
  const timelineDates = timeline.map(point => point.date);

  if (timeline.length === 0) {
    return null;
  }

  stories.forEach(story => {
    // add stories to matching the timeline date
    timeline.forEach(point => {
      if (point.date === story.date) {
        point['stories'] = story.stories;
      }
    });
  });

  return timeline;
};
