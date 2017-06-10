import React from 'react';
import { connect } from 'react-redux';
import ListingTile from './ListingTile';

const Listings = (props) => {
  return (
    <div className="listing-container">
      {props.listings.map(listing => <ListingTile key={listing.street + listing.url} listing={listing} />)}
    </div>
  )
};

const filterListings = (listings, filter) => {
  if (filter === 'price') {
    listings.sort((a,b) => {
      const numA = parseInt(a[filter].replace(/,/, ''), 10);
      const numB = parseInt(b[filter].replace(/,/, ''), 10);
      return numA > numB ? 1 : -1;
    });
    return listings;
  } else if (filter === 'beds') {
    return listings.sort((a,b) => parseInt(a[filter], 10) - parseInt(b[filter], 10));
  } else {
    return listings.sort((a,b) => {
        let numA = parseInt(a[filter], 10);
        let numB = parseInt(b[filter], 10);
        if (isNaN(numA)) {
          numA = 0;
        }
        if (isNaN(numB)) {
          numB = 0;
        }
        return numA > numB ? 1 : -1;
      });
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
