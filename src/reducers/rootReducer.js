import { combineReducers } from 'redux';
import listingDataReducer from './listingDataReducer';
const rootReducer = combineReducers({
  //key : reducer
  listings: listingDataReducer
});

export default rootReducer;