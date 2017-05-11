import React from 'react';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {
  return (
    <div className="col-4">
      <h6>Search History</h6>
      <ul>
        {history.map(term => {
          return <HistoryItem key={term} term={term}/>;
        })}
      </ul>
    </div>
  );
};

export default History;
