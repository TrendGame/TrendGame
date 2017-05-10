import React from 'react';
import Article from './Article.jsx';

const ArticleList = ({ storyPoint }) => {
  let { formattedTime, stories } = storyPoint;
  return (
    <div>
      <h2>Top news stories for {formattedTime}</h2>
      {
        stories.map(story => {
          return <Article key={story.url} story={story}/>;
        })
      }
    </div>
  );
};

export default ArticleList;
