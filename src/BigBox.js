import React, { Component } from 'react';
import LittleBox from './LittleBox';

const setColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'grey']

class BigBox extends Component {

  constructor(props) {
    super(props);
    this.state = {colors:['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'grey', 'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'grey'],
                        numColor:0,
                        numPosition:0};
    this.handleClick = this.handleClick.bind(this);
  }

  setRandom() {
    this.setState({
      numColor : Math.floor(Math.random() * 8),
      numPosition: Math.floor(Math.random() * 16),
      colors:[...this.state.colors.slice(0,this.state.numPosition),setColors[Math.floor(Math.random() * 8)],...this.state.colors.slice(this.state.numPosition+1)]
    });

  }

  handleClick(evt) {
    this.setRandom();
  }

  render() {

    return (
      <div>
        {this.state.colors.map(col => <LittleBox color={col} />)}
        <button onClick={this.handleClick}>
        Change
        </button>
      </div>

    )
  }
}

export default BigBox;

