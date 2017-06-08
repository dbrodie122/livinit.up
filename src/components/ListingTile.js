import React from 'react';

const ListingTile = (props) => {
  const listing = props.listing;
  return (
    <div className="listing-box">
      <img src={listing.pic} alt={`Listing at ${listing.address}`}></img>
      <div className="built">{listing.built ? 'Built in' : ''} {listing.built}</div>
      <a href={listing.url}>{listing.address}</a>
      <h2>${listing.price}</h2>
      <div className="details">
        <span> {listing.beds} beds </span>&bull;<span> {listing.baths} baths </span>&bull;<span> {listing.sqft} sq ft</span>
      </div>
      <p></p>
    </div>
  )
};

export default ListingTile;

      // newListing.address = listing.address;
      // newListing.price = listing.price;
      // newListing.beds = listing.beds;
      // newListing.baths = listing.baths;
      // newListing.sqft = listing.sqft;
      // newListing.built = listing.built;
      // newListing.pic = listing.thumb;
      // newListing.url = listing.url;

      //pic
      //built
      //address
      //price
      // one line -> beds - baths - sq ft.