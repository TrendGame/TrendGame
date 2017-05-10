import React from 'react';
import TrendChart from './Chart';
import Input from './Input';
import ArticleList from './ArticleList';

export default class Body extends React.Component {
  render () {
    return (
      <div>
        <h2>This is the Body</h2>
        <Input collectData={this.props.collectData}/>
        <h1></h1>
        <TrendChart chartData={this.props.chartData}/>
        <ArticleList storyPoint={this.props.storyPoint}/>
      </div>
    );
  }
}
