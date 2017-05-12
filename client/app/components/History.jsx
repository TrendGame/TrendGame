import React from 'react';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {
  return (
    <div className="col-4">
      <h6>Recent searches</h6>
      <ul className="list-inline">
        {history.map(term => {
          return <HistoryItem key={term} term={term}/>;
        })}
      </ul>
    </div>
  );
};

export default History;
