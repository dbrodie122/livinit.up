import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ControlButtons from './components/ControlButtons';
import Listings from './components/Listings';
import {__BATMAN_DATA__} from './data/batmanData';
import {__SUPERMAN_DATA__} from './data/supermanData';
import { connect } from 'react-redux';
import { handleListingData, updateFilterType } from './actions/actionCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchListingData = this.fetchListingData.bind(this);
    this.standardizeBatmanData = this.standardizeBatmanData.bind(this);
    this.standardizeSupermanData = this.standardizeSupermanData.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentDidMount() {
    this.fetchListingData();
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
    
    const addCommas = (numStr) => {
      return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const output = [];

    supermanData.items.forEach(listing => {
      const newListing = {};
      newListing.address = listing.address;
      newListing.price = addCommas(listing.price);
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

  updateFilter(type) {
    this.props.updateFilterType(type);
  };

  fetchListingData() {
    // The axios library has support across all browsers and could be used to hit our API endpoint
    // axios.get('url').then(data => standardizeData())

    //Instead, since we are importing dummy data, we will standardize it as if it had returned successfully.

    const batmanData = this.standardizeBatmanData(__BATMAN_DATA__);
    const supermanData = this.standardizeSupermanData(__SUPERMAN_DATA__);
    this.props.handleListingData(batmanData);
    this.props.handleListingData(supermanData);

  }

  render() {
    
    return (
      <div>
        <Header />
        <ControlButtons updateFilter={this.updateFilter}/>
        <Listings />
      </div>
    );
  }
}


// const filterListings = (listings, filter) => {
//   return listings.sort((a,b) => a[filter] - b[filter]);
// };

// const filterMessages = (messages, roomName) =>
//   messages.filter(message => message.roomName === roomName);

// filter for: (all are strings)
  //price - numbers have commas, could be empty string
  //beds - can have decimals, could be empty string
  //sqft - can be null

const mapStateToProps = state => ({
  listings: state.listings,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  handleListingData: data => dispatch(handleListingData(data)),
  updateFilterType: type => dispatch(updateFilterType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
