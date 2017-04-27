import React from 'react';
import {render} from 'react-dom';
import Layout from './components/Layout.jsx'

class App extends React.Component {
  render () {
    return (
        <Layout/>
    );
  }
}

render(<App/>, document.getElementById('app'));
