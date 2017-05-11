import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import History from './History';

export default class Layout extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <History history={this.props.history}/>
        <Body
          chartData={this.props.chartData}
          collectData={this.props.collectData}
          storyPoint={this.props.storyPoint}
        />
        <Footer/>
      </div>
    );
  }
}
