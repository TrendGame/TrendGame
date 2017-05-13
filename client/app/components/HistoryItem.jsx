import React from 'react';

const HistoryItem = ({ term, index, collectData }) => {
  let element = index === 0
    ? (
        <li className="list-inline-item">
          <a href="#" className="text-muted" onClick={() => collectData(term)}>{term}</a>
        </li>
      )
    : (
        <li className="list-inline-item">
          &middot; <a href="#" className="text-muted" onClick={() => collectData(term)}>{term}</a>
        </li>
      );

  return element;
};

export default HistoryItem;
