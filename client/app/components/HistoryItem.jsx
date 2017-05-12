import React from 'react';

const HistoryItem = ({ term, index }) => {
  let element = index === 0
    ? (
        <li className="list-inline-item">
          <a href="#" className="text-muted">{term}</a>
        </li>
      )
    : (
        <li className="list-inline-item">
          &middot; <a href="#" className="text-muted">{term}</a>
        </li>
      );

  return element;
};

export default HistoryItem;
