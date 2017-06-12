import React from 'react';

const ListingTile = (props) => {
  const listing = props.listing;
  return (
    <div className="listing-box">
        <a href={listing.url} ><span className="tile"></span></a>
        <img src={listing.pic} alt={`Listing at ${listing.street}`}></img>
        <div className="built" style={listing.built ? {} : {visibility: 'hidden'}}>{'Built in'} {listing.built}</div>
        <p className="truncate address">{listing.street}</p>
        <p className="truncate address">{listing.cityState}</p>
        <p className="price">${listing.price}</p>
        <div className="details">
          <span> {listing.beds} beds </span>&bull;
          <span> {listing.baths} {listing.baths <= 1 ? 'bath' : 'baths'} </span>&bull;
          <span> {listing.sqft ? `${listing.sqft} sq ft` : 'inquire'}</span>
        </div>
    </div>
  )
};

export default ListingTile;
