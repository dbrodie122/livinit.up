import { combineReducers } from 'redux';
import batmanAPIreducer from './batmanAPIreducer';
import supermanAPIreducer from './supermanAPIreducer';
const rootReducer = combineReducers({
  //key : reducer
  batmanAPI: batmanAPIreducer,
  supermanAPI: supermanAPIreducer
});

export default rootReducer;