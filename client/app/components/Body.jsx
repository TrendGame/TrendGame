import React from 'react';
import TrendChart from './Chart';
import Input from './Input';
import ArticleList from './ArticleList';

export default class Body extends React.Component {
  render () {
    return (
      <div className="col-8">
        <Input collectData={this.props.collectData}/>
        <TrendChart chartData={this.props.chartData}/>
        <ArticleList storyPoint={this.props.storyPoint}/>
      </div>
    );
  }
}
