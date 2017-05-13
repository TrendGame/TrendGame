import React from 'react';
import HistoryItem from './HistoryItem';

const History = ({ history, collectData }) => {
  return (
    <div className="row mb-5">
      <div className="col-12 text-center">
        <small>Recent searches</small>
        <ul className="list-inline text-center text-muted">
          {history.map((term, index) => {
            return <HistoryItem key={term} term={term} index={index} collectData={collectData}/>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default History;
