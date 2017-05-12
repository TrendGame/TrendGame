import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trend: ''
    };
    this.handeInput = this.handeInput.bind(this);
    this.submitTrend = this.submitTrend.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  handeInput(event) {
    this.setState({trend: event.target.value});
  }

  submitTrend(event) {
    this.props.collectData(this.state.trend);
  }

  onEnter(event) {
    if (event.key === 'Enter') {
      this.props.collectData(this.state.trend);
    }
  }

  render () {
    return (
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter a topic"
              onKeyPress={this.onEnter}
              onChange={this.handeInput}
              autoFocus
            >
            </input>
            <input
              className="form-control"
              type="submit"
              onClick={this.submitTrend}
            >
            </input>
          </div>
        </div>
      </div>
    );
  }
}
