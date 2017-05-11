import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import History from './History';

const Layout = (props) => {
  return (
    <div className="container">
      <Header/>
      <div className="row">
        <History history={props.history}/>
        <Body
          chartData={props.chartData}
          collectData={props.collectData}
          storyPoint={props.storyPoint}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
