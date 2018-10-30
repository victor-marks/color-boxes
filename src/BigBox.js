import React, { Component } from 'react';
import LittleBox from 'LittleBox';



class BigBox extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { num: 0 };
  //   let randoNums = new Array(this.props.maxBoxes);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // setRandom() {
  //   this.setState({
  //     num: Math.floor(Math.random() * this.props.maxBoxes)
  //   });
  // }

  // handleClick(evt) {
  //   this.setRandom();
  // }

  render() {

    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'grey', 'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'grey'];

    return (
      <div>
        {colors.map(col => <LittleBox color={col} />)}
      </div>

    )
  }
}

export default BigBox;


/* <button onClick={this.handleClick}>
Change
</button> */