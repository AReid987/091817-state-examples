import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 11
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('this in the callback: ', this);
    this.setState(function(state) {
      return {
        count: state.count + 1
      };
    });
  }

  render() {
    console.log('component is rendering');
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}> + </button>
      </div>
    );
  }
}

export default Counter;
