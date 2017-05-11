import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import History from './History';

const Layout = (props) => {
  return (
    <div>
      <Header/>
      <History history={props.history}/>
      <Body
        chartData={props.chartData}
        collectData={props.collectData}
        storyPoint={props.storyPoint}
      />
      <Footer/>
    </div>
  );
};

export default Layout;
