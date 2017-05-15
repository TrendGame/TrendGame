import React from 'react';
import Article from './Article.jsx';

const ArticleList = ({ trend, storyPoint }) => {
  let articles;

  if (storyPoint.hasOwnProperty('stories') && storyPoint.stories.length === 0) {
    articles = (
      <div>
        <h6>No stories on this trend found for {storyPoint.formattedTime}.</h6>
      </div>
    );
  } else if (storyPoint.hasOwnProperty('stories')) {
    articles = (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h2 className="h4 mb-4">
                <strong>Why</strong> did <strong className="text-lowercase">{trend}</strong> peak?
              </h2>
            </div>
          </div>
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
