const filterTypeReducer = (state = 'price', action) => {
  switch (action.type) {
    case 'UPDATE_FILTER_TYPE':
      return action.filter;
    default:
      return state;
  }
};

export default filterTypeReducer;