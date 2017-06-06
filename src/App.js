import React, { Component } from 'react';
import Header from './components/Header';
import ControlButtons from './components/ControlButtons';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ControlButtons />
      </div>
    );
  }
}

export default App;
