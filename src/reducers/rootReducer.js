import { combineReducers } from 'redux';
import listingDataReducer from './listingDataReducer';
import filterTypeReducer from './filterTypeReducer';
const rootReducer = combineReducers({
  //key : reducer
  listings: listingDataReducer,
  filter: filterTypeReducer
});

export default rootReducer;