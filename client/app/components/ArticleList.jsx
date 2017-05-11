import React from 'react';
import Article from './Article.jsx';

const ArticleList = ({ storyPoint }) => {
  let articles;

  if (storyPoint.hasOwnProperty('stories') && storyPoint.stories[0] === null) {
    articles = (
      <div>
        <h2>No stories on this trend found for {storyPoint.formattedTime}.</h2>
      </div>
    );
  } else if (storyPoint.hasOwnProperty('stories')) {
    articles = (
      <div>
        <h2>Top news stories for {storyPoint.formattedTime}</h2>
        {storyPoint.stories.map(story => {
          return <Article key={story.url} story={story}/>;
        })}
      </div>
    );
  } else {
    articles = <div></div>;
  }
  return articles;
};

export default ArticleList;
