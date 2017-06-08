import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ControlButtons from './components/ControlButtons';
import Listings from './components/Listings';
import {__BATMAN_DATA__} from './data/batmanData';
import {__SUPERMAN_DATA__} from './data/supermanData';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchListingData = this.fetchListingData.bind(this);
    this.standardizeBatmanData = this.standardizeBatmanData.bind(this);
    this.standardizeSupermanData = this.standardizeSupermanData.bind(this);
  }
  componentDidMount() {
    console.log(axios);
  }

  standardizeBatmanData(batmanData) {
    const output = [];

    for(let key in batmanData) {
      const newListing = {};
      newListing.address = key;
      newListing.price = batmanData[key].cost;
      newListing.beds = batmanData[key].beds;
      newListing.baths = batmanData[key].baths;
      newListing.sqft = batmanData[key]['sq_ft'];
      newListing.built = null;
      newListing.pic = batmanData[key].img;
      newListing.url = batmanData[key].url;
      output.push(newListing);
    }
    return output;
  }

  standardizeSupermanData(supermanData) {
    const output = [];

    superman.items.forEach(listing => {
      const newListing = {};
      newListing.address = listing.address;
      newListing.price = listing.price;
      newListing.beds = listing.beds;
      newListing.baths = listing.baths;
      newListing.sqft = listing.sqft;
      newListing.built = listing.built;
      newListing.pic = listing.thumb;
      newListing.url = listing.url;
      output.push(newListing);
    })
    return output;
  }

  fetchListingData() {
    // The axios library has support across all browsers and could be used to hit our API endpoint
    axios.get('url/batman')
    .then(batmandData => standardizeBatmanData(batmanData))
    .then()
  }
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
