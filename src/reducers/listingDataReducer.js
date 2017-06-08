const listingDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'HANDLE_LISTING_DATA':
      return [...state].concat(action.data);
    default:
      return state;
  }
};

export default listingDataReducer;