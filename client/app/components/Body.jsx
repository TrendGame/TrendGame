import React from 'react';
import TrendChart from './Chart';
import Input from './Input';
import History from './History';
import ArticleList from './ArticleList';

const Body = (props) => {
  return (
    <div className="col-8 offset-2">
      <Input collectData={props.collectData}/>
      <History history={props.history}/>
      <TrendChart chartData={props.chartData} storyPoint={props.storyPoint}/>
      <ArticleList storyPoint={props.storyPoint}/>
    </div>
  );
};

export default Body;
