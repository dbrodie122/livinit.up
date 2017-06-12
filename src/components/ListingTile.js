import React from 'react';

const ListingTile = (props) => {
  const listing = props.listing;
  return (
    <div className="listing-box">
      <div className="listing-inner-box">
        <img src={listing.pic} alt={`Listing at ${listing.street}`}></img>
        <div className="built" style={listing.built ? {} : {visibility: 'hidden'}}>{'Built in'} {listing.built}</div>
        <p className="truncate address">{listing.street}</p>
        <p className="truncate address">{listing.cityState}</p>
        <p className="price">${listing.price}</p>
        <div className="details">
          <span> {listing.beds} beds </span>&bull;
          <span> {listing.baths} baths </span>&bull;
          <span> {listing.sqft ? `${listing.sqft} sq ft` : 'inquire'}</span>
        </div>
      </div>
    </div>
  )
};

export default ListingTile;


//wrap text content in div and use flexbox to manage sizes responsively
// can handle long addresses with overflow elipses in css, check text link

        // {listing.built && (
        //   <div className="built">{'Built in'} {listing.built}</div>
        // )}