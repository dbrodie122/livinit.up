export const handleListingData = data => ({
  type: 'HANDLE_LISTING_DATA',
  data
});

export const updateFilterType = filter => ({
  type: 'UPDATE_FILTER_TYPE',
  filter:`${filter}`
});

// export const updateFilterToBeds = filter => ({
//   type: 'BEDS',
//   filter
// });

// export const updateFilterToSqft = filter => ({
//   type: 'SQFT',
//   filter
// });