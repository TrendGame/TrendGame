module.exports = (timeline, stories) => {
  const timelineDates = timeline.map(point => point.date);

  if (timeline.length === 0) {
    return null;
  }

  stories.forEach(story => {
    // throw error if a story's date is not in the timeline
    if (!timelineDates.includes(story.date)) {
      throw new Error(`Story date matches no timeline dates: ${story}`);
    }

    // add stories to matching the timeline date
    timeline.forEach(point => {
      if (point.date === story.date) {
        point['stories'] = story.stories;
      }
    });
  });

  return timeline;
};
