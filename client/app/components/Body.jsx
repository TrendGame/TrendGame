import React from 'react';
import Chart from './Chart';
import Input from './Input';
import ArticleList from './ArticleList';

export default class Body extends React.Component {
  render () {
    return (
      <div>
        <h2>This is the Body</h2>
        <Input/>
        <h1></h1>
        <Chart/>
        <ArticleList/>
      </div>
    );
  }
}
