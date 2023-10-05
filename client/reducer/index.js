import { combineReducers } from 'redux';

// import all reducers here
import profileReducer from './profileReducer.js';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  profile: profileReducer,
});

// make the combined reducers available for import
export default reducers;
