import { combineReducers } from 'redux';
import listings from './listingDataReducer';
import filterTypeReducer from './filterTypeReducer';
const rootReducer = combineReducers({
  //key : reducer
  listings,
  filter: filterTypeReducer
});

export default rootReducer;