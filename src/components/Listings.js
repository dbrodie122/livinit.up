import React from 'react';
import { connect } from 'react-redux';
import ListingTile from './ListingTile';

const Listings = (props) => {
  return (
    <div className="listing-container">
      {props.listings.map(listing => <ListingTile key={listing.address + listing.url} listing={listing} />)}
    </div>
  )
};

const filterListings = (listings, filter) => {
  return listings.sort((a,b) => a[filter] - b[filter]);
};

const mapStateToProps = state =>({
  listings: filterListings(state.listings, state.filter),
  filter: state.filter
});


export default connect(mapStateToProps, null)(Listings);
