import React from 'react';
import Article from './Article.jsx';

const ArticleList = ({ storyPoint }) => {
  let articles;

  !storyPoint.hasOwnProperty('stories')
  ? articles = <div>no story point yet</div>
  : articles = (
      <div>
        <h2>Top news stories for {storyPoint.formattedTime}</h2>
        {storyPoint.stories.map(story => {
          return <Article key={story.url} story={story}/>;
        })}
      </div>
  );

  return articles;
};

export default ArticleList;
