import React, { Component } from 'react';
import './App.css';
import BigBox from './BigBox'

class App extends Component {
  render() {
    return (
      <BigBox maxBoxes={16} />
    );
  }
}

export default App;
