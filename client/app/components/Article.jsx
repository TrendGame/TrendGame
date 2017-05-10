import React from 'react';

const Article = ({ story }) => {
  let { headline, url, media, summary } = story;

  return (
    <div>
      <h3><a href={url}>{headline}</a></h3>
      <img src={media} alt={headline}/>
      <p>{summary}</p>
    </div>
  );
};

export default Article;
