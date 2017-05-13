import React from 'react';

export default class Header extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col mt-4 mb-4 text-center">
          <h1>TrendGame</h1>
          <p className="text-muted">
            Find out <strong>when</strong> interest in a topic peaked and <strong>why.</strong>
          </p>
        </div>
      </div>
    );
  }
}
