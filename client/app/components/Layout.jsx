import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import History from './History';

const Layout = (props) => {
  return (
    <div>
      <div className="container">
        <Header/>
        <div className="row">
          <Body
            chartData={props.chartData}
            collectData={props.collectData}
            storyPoint={props.storyPoint}
          />
          <History history={props.history}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
