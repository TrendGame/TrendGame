import _ from 'lodash';
import React from 'react';
import Article from './Article.jsx';

const ArticleList = ({ storyPoint }) => {
  let articles;

  if (storyPoint.hasOwnProperty('stories') && storyPoint.stories[0] === null) {
    articles = (
      <div>
        <h6>No stories on this trend found for {storyPoint.formattedTime}.</h6>
      </div>
    );
  } else if (storyPoint.hasOwnProperty('stories')) {
    articles = (
      <div className="row">
        <div className="col-12">
          <h2>Top news stories for {storyPoint.formattedTime}</h2>
          {/*{makeArticleRow(storyPoint.stories, 2)}*/}
          <div className="row">
            {storyPoint.stories.map(story => {
              return <Article key={story.url} story={story}/>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    articles = <div></div>;
  }
  return articles;
};

export default ArticleList;
