import React, { Component } from 'react';

class LittleBox extends Component {

  render() {
    const { color } = this.props;
    const styleObj = {
      backgroundColor: color,
      display: 'inline-block'
    }

    return (
      <div className="card" style={styleObj} >
        <div className="card-body">
        </div>
      </div>
    )
  }
}

export default LittleBox;