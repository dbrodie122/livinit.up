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

const mapStateToProps = state =>({
  listings: state.listings
});


export default connect(mapStateToProps, null)(Listings);
