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
  if (filter === 'price') {
    const copy = [...listings];
    copy.sort((a,b) => {
      const numA = parseInt(a[filter].replace(/,/, ''), 10);
      const numB = parseInt(b[filter].replace(/,/, ''), 10);
      return numA > numB ? 1 : -1;
    });
    return listings;
  } else if (filter === 'beds') {
    return listings.sort((a,b) => parseInt(b[filter]) - parseInt(a[filter]));
  } else {
    return listings;
  }

};

const mapStateToProps = state =>({
  listings: filterListings(state.listings, state.filter),
  filter: state.filter
});

// filter for: (all are strings)
  //price - numbers have commas, could be empty string
  //beds - could be empty string
  //sqft - can be null

export default connect(mapStateToProps, null)(Listings);
