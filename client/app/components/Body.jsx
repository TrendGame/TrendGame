import React from 'react';
import TrendChart from './Chart';
import Input from './Input';
import History from './History';
import ArticleList from './ArticleList';

const Body = ({ collectData, history, chartData, storyPoint }) => {
  return (
    <div className="row">
      <div className="col-8 offset-2">
        <Input collectData={collectData}/>
        <History history={history}/>
        <TrendChart chartData={chartData} storyPoint={storyPoint}/>
        <ArticleList storyPoint={storyPoint}/>
      </div>
    </div>
  );
};

export default Body;
