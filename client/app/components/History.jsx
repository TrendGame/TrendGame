import React from 'react';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {
  return (
    <div className="col-3">
      <h2>Search History</h2>
      <ul>
        {history.map(term => {
          return <HistoryItem key={term} term={term}/>;
        })}
      </ul>
    </div>
  );
};

export default History;
