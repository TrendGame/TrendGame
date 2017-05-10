import React from 'react';
import Body from './Body'
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <Header/>
        <Body chartData = {this.props.chartData} trend={this.props.trend} start={this.props.start} end={this.props.end} collectData={this.props.collectData}/>
        <Footer/>
      </div>
    );
  }
}
