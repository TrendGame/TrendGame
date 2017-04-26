import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p>HELLO ___ REACT!</p>;
  }
}

render(<App/>, document.getElementById('app'));
