const listingDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'HANDLE_LISTING_DATA':
      return action.data;
    default:
      return state;
  }
};

export default listingDataReducer;