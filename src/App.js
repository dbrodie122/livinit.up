import React, { Component } from 'react';
import Header from './components/Header';
import ControlButtons from './components/ControlButtons';
import Listings from './components/Listings';
import {__BATMAN_DATA__} from './data/batmanData';
import {__SUPERMAN_DATA__} from './data/supermanData';

class App extends Component {
  constructor(props) {
    super(props);

  }


  //function to fetch data from the server apis
    // formatData
    // dispatch action to set it in state
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
