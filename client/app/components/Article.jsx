import React from 'react';

const Article = ({ story }) => {
  let { headline, url, media, summary } = story;

  return (
    <div className="col-6">
      <div className="card">
        <img className="card-img-top img-fluid" src={media} alt={headline}/>
        <div className="card-block">
          <h4 className="card-title">{headline}</h4>
          <p className="card-text">{summary}</p>
          <a href={url} className="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Article;
