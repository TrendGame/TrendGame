import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <h1>TrendGame!</h1>
        </div>
        <div className="search-bar">
          <form>
            <input type="text" name="Explore Trends" placeholder="Explore Your Interests"/>
          </form>
        </div>
        <div className="main">
          <div className="graph">
            <h2>GRAPH___GOES___HERE!</h2>
          </div>
          <div className="article">
            <h2>ARTICLES___GO___HERE!</h2>
          </div>
        </div>

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
