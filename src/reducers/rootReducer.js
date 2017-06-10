import { combineReducers } from 'redux';
import listings from './listingDataReducer';
import filter from './filterTypeReducer';
const rootReducer = combineReducers({
  listings,
  filter
});

export default rootReducer;