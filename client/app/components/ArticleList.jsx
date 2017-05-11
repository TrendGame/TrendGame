import React from 'react';
import Article from './Article.jsx';

const ArticleList = ({ storyPoint }) => {
  let articles;

  !storyPoint.hasOwnProperty('stories')
  ? articles = <div></div>
  : articles = (
      <div className="row">
        <div className="col-12">
          <h3>Top news stories for {storyPoint.formattedTime}</h3>
          {storyPoint.stories.map(story => {
            return <Article key={story.url} story={story}/>;
          })}
        </div>
      </div>
  );

  return articles;
};

export default ArticleList;
