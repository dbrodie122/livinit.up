import React, { Component } from 'react';
import Header from './components/Header';
import ControlButtons from './components/ControlButtons';
import Listings from './components/Listings';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ControlButtons />
        <Listings />
      </div>
    );
  }
}

export default App;
