import React from 'react';

const HistoryItem = ({ term, index }) => {
  let element = index === 0
    ? <li className="list-inline-item">{term}</li>
    : <li className="list-inline-item">&middot; {term}</li>;

  return element;
};

export default HistoryItem;
