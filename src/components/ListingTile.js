import React from 'react';

const ListingTile = (props) => {
  const listing = props.listing;
  return (
    <div className="listing-box">
      <img src={listing.pic} alt={`Listing at ${listing.address}`}></img>
      <div className="built">{listing.built ? 'Built in' : ''} {listing.built}</div>
      <h3 href={listing.url}>{listing.address}</h3>
      <h2>${listing.price}</h2>
      <div className="details">
        <span> {listing.beds} beds </span>&bull;
        <span> {listing.baths} baths </span>&bull;
        <span> {listing.sqft ? `${listing.sqft} sq ft` : 'inquire'}</span>
      </div>
      <p></p>
    </div>
  )
};

export default ListingTile;
