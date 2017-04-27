import React from 'react';
import {render} from 'react-dom';

import Footer from './Footer.jsx';
import Header from './Header.jsx';

export default class Layout extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <Footer/>
    </div>
    );
  }
}
